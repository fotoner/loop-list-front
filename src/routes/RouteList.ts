import MainPage from '@/pages/MainPage';
import NotFoundPage from '@/pages/NotFoundPage';
import PlaylistDetailPage from '@/pages/PlaylistDetailPage';
import PlaylistSearchPage from '@/pages/PlaylistSearchPage';

const RouteList = [
  {
    path: '/',
    name: 'main',
    component: MainPage,
  },
  {
    path: '/playlists',
    name: 'playlists',
    component: PlaylistSearchPage,
  },
  {
    path: '/playlists/@{id}',
    name: 'detail',
    component: PlaylistDetailPage,
  },

  {
    path: '*',
    name: '404',
    component: NotFoundPage,
  },
];

export default RouteList;
