import React, { useRef, useState } from 'react';
import styled from '@emotion/styled';
import { color, fontSize, fontWeight, layoutWidth, spacing } from '@/styles/base';
import { Button } from '@/components/common/Button';
import { parse } from 'papaparse';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import DeleteIcon from '@/assets/icons/DeleteIcon.svg';
import { useDropzone } from 'react-dropzone';
import Input from '@/components/common/Input';
import FormGroup from '@/components/common/FormGroup';

const TemplateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FormContainer = styled.div`
  margin: auto;
  max-width: ${layoutWidth};
  width: 100%;
  padding: ${spacing[4]};
`;

const FormSection = styled.div`
  margin-bottom: ${spacing[6]};

  h2 {
    font-size: ${fontSize.xl};
    font-weight: ${fontWeight.semibold};
    color: ${color['primary-500']};
    margin-bottom: ${spacing[2]};
  }
`;

const TagInput = styled.div`
  display: flex;
  gap: ${spacing[2]};
  flex-wrap: wrap;
`;

const Tag = styled.span`
  padding: ${spacing[1]} ${spacing[2]};
  background-color: ${color['primary-700']};
  border-radius: ${spacing[1]};
  font-size: ${fontSize.sm};
  color: ${color['gray-30']};
  cursor: pointer;
`;

interface Track {
  number: number;
  title: string;
  artist: string;
  bpm: number;
  comment: string;
}

const EditableCell = styled.div`
  padding: ${spacing[2]};
  border: 1px solid transparent;
  &:hover {
    border-color: ${color['gray-300']};
  }
  input {
    width: 100%;
    border: none;
    background: transparent;
    &:focus {
      outline: none;
      border-color: ${color['primary-500']};
    }
  }
`;

const DeleteButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: ${spacing[1]};
  color: ${color['error-500']};
  &:hover {
    color: ${color['error-700']};
  }
`;

const BPMInput = styled.input`
  width: 30px;
  max-width: 30px;
  text-align: left;
`;

const AlbumCoverUpload = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${spacing[4]};
  margin-bottom: ${spacing[6]};
`;

const AlbumCoverPreview = styled.div<{ imageUrl?: string }>`
  width: ${spacing[40]};
  height: ${spacing[40]};
  border-radius: ${spacing[2]};
  background-color: ${color['gray-300']};
  background-image: url(${(props) => props.imageUrl});
  background-size: cover;
  background-position: center;
  border: 2px solid ${color['gray-500']};
`;

const Dropzone = styled.div`
  border: 2px dashed ${color['gray-500']};
  border-radius: ${spacing[2]};
  padding: ${spacing[4]};
  text-align: center;
  cursor: pointer;
  background-color: ${color['gray-30']};
  &:hover {
    border-color: ${color['primary-500']};
  }
`;

const TrackTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: ${spacing[4]};

  th,
  td {
    padding: ${spacing[2]};
    border-bottom: 1px solid ${color['gray-300']};
  }

  th {
    text-align: left;
    color: ${color['gray-600']};
    font-size: ${fontSize.sm};
  }

  td {
    color: ${color['gray-800']};
  }
`;

const AddTrackButton = styled(Button)`
  margin-top: ${spacing[2]};
`;

const PlaylistCreatePage: React.FC = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState<string[]>([]);
  const [newTag, setNewTag] = useState('');
  const [tracks, setTracks] = useState<Track[]>([]);
  const [fileName, setFileName] = useState('');
  const [albumCover, setAlbumCover] = useState<string | null>(null);

  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleAddTag = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && newTag.trim()) {
      setTags([...tags, newTag.trim()]);
      setNewTag('');
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: { 'text/plain': ['.txt'] },
    onDrop: (acceptedFiles) => {
      const file = acceptedFiles[0];
      if (file) {
        setFileName(file.name);
        parse(file, {
          header: true,
          complete: (results) => {
            const parsedTracks = results.data.map((row: any, index) => ({
              number: index + 1,
              title: row['트랙 제목'],
              artist: row['아티스트'],
              bpm: Math.floor(parseFloat(row['BPM'])),
              comment: row['커멘트'],
            }));
            setTracks(parsedTracks);
          },
          encoding: 'UTF-8',
        });
      }
    },
  });

  const { getRootProps: getAlbumCoverRootProps, getInputProps: getAlbumCoverInputProps } =
    useDropzone({
      accept: { 'image/*': ['.jpg', '.jpeg', '.png'] },
      onDrop: (acceptedFiles) => {
        const file = acceptedFiles[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = () => {
            setAlbumCover(reader.result as string);
          };
          reader.readAsDataURL(file);
        }
      },
    });

  const handleSubmit = () => {
    console.log({ title, description, tags, tracks });
  };

  const onDragEnd = (result: any) => {
    if (!result.destination) return;
    const items = Array.from(tracks);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setTracks(items);
  };

  const handleTrackChange = (index: number, field: keyof Track, value: string) => {
    const newTracks = [...tracks];
    const parsedValue = field === 'bpm' ? Number(value) : value;
    newTracks[index] = { ...newTracks[index], [field]: parsedValue };
    setTracks(newTracks);
  };

  const handleDeleteTrack = (index: number) => {
    const newTracks = tracks.filter((_, i) => i !== index);
    setTracks(newTracks);
  };

  const handleAddTrack = () => {
    const newTrack: Track = {
      number: tracks.length + 1,
      title: '',
      artist: '',
      bpm: 0,
      comment: '',
    };
    setTracks([...tracks, newTrack]);
  };

  return (
    <TemplateWrapper>
      <FormContainer>
        <FormSection>
          <FormGroup label='플레이리스트 제목'>
            <Input
              type='text'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder='플레이리스트 제목을 입력하세요'
            />
          </FormGroup>
        </FormSection>

        <FormSection>
          <h2>앨범 커버</h2>
          <AlbumCoverUpload>
            <AlbumCoverPreview imageUrl={albumCover || undefined} />
            <Dropzone {...getAlbumCoverRootProps()}>
              <input {...getAlbumCoverInputProps()} />
              <p>앨범 커버 이미지를 드래그하거나 클릭하여 업로드하세요</p>
              <p>(JPG, PNG 파일만 가능)</p>
            </Dropzone>
          </AlbumCoverUpload>
        </FormSection>

        <FormSection>
          <FormGroup label='설명'>
            <Input
              type='textarea'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder='플레이리스트 설명을 입력하세요'
              rows={5}
            />
          </FormGroup>
        </FormSection>

        <FormSection>
          <h2>태그</h2>
          <TagInput>
            {tags.map((tag, index) => (
              <Tag key={index}>
                {tag}
                <DeleteButton onClick={() => handleRemoveTag(tag)}>
                  <img src={DeleteIcon} alt='Delete' />
                </DeleteButton>
              </Tag>
            ))}
            <Input
              type='text'
              value={newTag}
              onChange={(e) => setNewTag(e.target.value)}
              onKeyPress={handleAddTag}
              placeholder='태그를 입력하고 엔터를 눌러 추가하세요'
            />
          </TagInput>
        </FormSection>

        <FormSection>
          <h2>트랙 목록</h2>
          <Dropzone {...getRootProps()}>
            <input {...getInputProps()} />
            {fileName ? (
              <p>업로드된 파일: {fileName}</p>
            ) : (
              <>
                <p>파일을 여기로 드래그하거나 클릭하여 업로드하세요</p>
                <p>(.txt 파일만 가능)</p>
              </>
            )}
          </Dropzone>
          {tracks.length > 0 && (
            <DragDropContext onDragEnd={onDragEnd}>
              <Droppable droppableId='tracks'>
                {(provided) => (
                  <TrackTable {...provided.droppableProps} ref={provided.innerRef}>
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>트랙 제목</th>
                        <th>아티스트</th>
                        <th>BPM</th>
                        <th>커멘트</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {tracks.map((track, index) => (
                        <Draggable
                          key={track.number}
                          draggableId={track.number.toString()}
                          index={index}
                        >
                          {(provided, snapshot) => (
                            <tr
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              style={{
                                ...provided.draggableProps.style,
                                transform: snapshot.isDragging ? 'translate(0, 0)' : 'none',
                              }}
                            >
                              <td {...provided.dragHandleProps}>{track.number}</td>
                              <td>
                                <EditableCell>
                                  <input
                                    ref={(el) => (inputRefs.current[index] = el)}
                                    value={track.title || ''}
                                    onChange={(e) =>
                                      handleTrackChange(index, 'title', e.target.value)
                                    }
                                  />
                                </EditableCell>
                              </td>
                              <td>
                                <EditableCell>
                                  <input
                                    ref={(el) => (inputRefs.current[index] = el)}
                                    value={track.artist || ''}
                                    onChange={(e) =>
                                      handleTrackChange(index, 'artist', e.target.value)
                                    }
                                  />
                                </EditableCell>
                              </td>
                              <td>
                                <EditableCell>
                                  <BPMInput
                                    ref={(el) => (inputRefs.current[index] = el)}
                                    type='number'
                                    value={track.bpm || ''}
                                    onChange={(e) => {
                                      const value = e.target.value;
                                      if (value.length <= 3) {
                                        handleTrackChange(index, 'bpm', value);
                                      }
                                    }}
                                  />
                                </EditableCell>
                              </td>
                              <td>
                                <EditableCell>
                                  <input
                                    ref={(el) => (inputRefs.current[index] = el)}
                                    value={track.comment || ''}
                                    onChange={(e) =>
                                      handleTrackChange(index, 'comment', e.target.value)
                                    }
                                  />
                                </EditableCell>
                              </td>
                              <td>
                                <DeleteButton onClick={() => handleDeleteTrack(index)}>
                                  <img src={DeleteIcon} alt='' />
                                </DeleteButton>
                              </td>
                            </tr>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </tbody>
                  </TrackTable>
                )}
              </Droppable>
            </DragDropContext>
          )}
          <AddTrackButton
            onClick={handleAddTrack}
            backgroundColor={color['primary-500']}
            textColor={color['gray-30']}
            hoverBackgroundColor={color['primary-600']}
          >
            트랙 추가
          </AddTrackButton>
        </FormSection>

        <Button
          onClick={handleSubmit}
          backgroundColor={color['primary-500']}
          textColor={color['gray-30']}
          hoverBackgroundColor={color['primary-600']}
          style={{ width: '100%', marginTop: spacing[4] }}
        >
          플레이리스트 생성
        </Button>
      </FormContainer>
    </TemplateWrapper>
  );
};

export default PlaylistCreatePage;
