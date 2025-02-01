import { css } from '@emotion/react';

const globalStyles = css`
  @font-face {
    font-family: 'NotoSansKR';
    src: url('/assets/NotoSansKR-Thin.ttf') format('ttf');
    font-style: normal;
    font-weight: 100;
  }

  @font-face {
    font-family: 'NotoSansKR';
    src: url('/assets/NotoSansKR-Light.ttf') format('ttf');
    font-style: normal;
    font-weight: 300;
  }

  @font-face {
    font-family: 'NotoSansKR';
    src: url('/assets/NotoSansKR-Regular.ttf') format('ttf');
    font-style: normal;
    font-weight: 400;
  }

  @font-face {
    font-family: 'NotoSansKR';
    src: url('/assets/NotoSansKR-Medium.ttf') format('ttf');
    font-style: normal;
    font-weight: 500;
  }

  @font-face {
    font-family: 'NotoSansKR';
    src: url('/assets/NotoSansKR-Bold.ttf') format('ttf');
    font-style: normal;
    font-weight: 700;
  }

  @font-face {
    font-family: 'NotoSansKR';
    src: url('/assets/NotoSansKR-Black.ttf') format('ttf');
    font-style: normal;
    font-weight: 900;
  }

  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 100;
    src: url('/assets/Inter-Thin.woff2') format('woff2');
  }
  @font-face {
    font-family: 'Inter';
    font-style: italic;
    font-weight: 100;
    src: url('/assets/Inter-ThinItalic.woff2') format('woff2');
  }
  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 200;
    src: url('/assets/Inter-ExtraLight.woff2') format('woff2');
  }
  @font-face {
    font-family: 'Inter';
    font-style: italic;
    font-weight: 200;
    src: url('/assets/Inter-ExtraLightItalic.woff2') format('woff2');
  }
  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 300;
    src: url('/assets/Inter-Light.woff2') format('woff2');
  }
  @font-face {
    font-family: 'Inter';
    font-style: italic;
    font-weight: 300;
    src: url('/assets/Inter-LightItalic.woff2') format('woff2');
  }
  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    src: url('/assets/Inter-Regular.woff2') format('woff2');
  }
  @font-face {
    font-family: 'Inter';
    font-style: italic;
    font-weight: 400;
    src: url('/assets/Inter-Italic.woff2') format('woff2');
  }
  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    src: url('/assets/Inter-Medium.woff2') format('woff2');
  }
  @font-face {
    font-family: 'Inter';
    font-style: italic;
    font-weight: 500;
    src: url('/assets/Inter-MediumItalic.woff2') format('woff2');
  }
  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    src: url('/assets/Inter-SemiBold.woff2') format('woff2');
  }
  @font-face {
    font-family: 'Inter';
    font-style: italic;
    font-weight: 600;
    src: url('/assets/Inter-SemiBoldItalic.woff2') format('woff2');
  }
  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    src: url('/assets/Inter-Bold.woff2') format('woff2');
  }
  @font-face {
    font-family: 'Inter';
    font-style: italic;
    font-weight: 700;
    src: url('/assets/Inter-BoldItalic.woff2') format('woff2');
  }
  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 800;
    src: url('/assets/Inter-ExtraBold.woff2') format('woff2');
  }
  @font-face {
    font-family: 'Inter';
    font-style: italic;
    font-weight: 800;
    src: url('/assets/Inter-ExtraBoldItalic.woff2') format('woff2');
  }
  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 900;
    src: url('/assets/Inter-Black.woff2') format('woff2');
  }
  @font-face {
    font-family: 'Inter';
    font-style: italic;
    font-weight: 900;
    src: url('/assets/Inter-BlackItalic.woff2') format('woff2');
  }

  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }
  li {
    list-style: none;
  }
  a {
    text-decoration: none;
  }

  input {
    -webkit-appearance: none;
    appearance: none;
    -webkit-border-radius: 0;
    border-radius: 0;
    &:focus {
      outline: none;
    }
  }

  textarea {
    -webkit-appearance: none;
    appearance: none;
    -webkit-border-radius: 0;
    border-radius: 0;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    appearance: none;
  }

  select {
    -webkit-appearance: none;
    appearance: none;
  }
  button {
    cursor: pointer;
  }
  .app {
    position: relative;
  }
  body {
    font-family:
      'Inter',
      'NotoSansKR',
      'Helvetica Neue',
      Helvetica,
      Arial,
      '맑은 고딕',
      malgun gothic,
      '돋움',
      Dotum,
      sans-serif,
      'Apple Color Emoji',
      'Noto Color Emoji';
  }
`;

export default globalStyles;
