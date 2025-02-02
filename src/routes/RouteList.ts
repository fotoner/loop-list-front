import MainPage from '@/pages/MainPage';
import NotFoundPage from '@/pages/NotFoundPage';
import PlaylistCreatePage from '@/pages/PlaylistCreatePage';
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
    path: '/playlists/create',
    name: 'create',
    component: PlaylistCreatePage,
  },
  {
    path: '/playlists/:id',
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
