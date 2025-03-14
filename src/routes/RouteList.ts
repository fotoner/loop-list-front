import MainPage from '@/pages/MainPage';
import NotFoundPage from '@/pages/NotFoundPage';
import PlaylistCreatePage from '@/pages/PlaylistCreatePage';
import PlaylistDetailPage from '@/pages/PlaylistDetailPage';
import PlaylistSearchPage from '@/pages/PlaylistSearchPage';
import SignupPage from '@/pages/SignupPage';
import UserEditPage from '@/pages/UserEditPage';
import UserPage from '@/pages/UserPage';
import LoginRedirectPage from '@/pages/LoginRedirectPage';
import LoginPage from '@/pages/LoginPage';

const RouteList = [
  {
    path: '/',
    name: 'main',
    component: MainPage,
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignupPage,
  },
  {
    path: '/playlists',
    name: 'playlists',
    component: PlaylistSearchPage,
  },
  {
    path: '/user/:id',
    name: 'user',
    component: UserPage,
  },
  {
    path: '/user/edit',
    name: 'user',
    component: UserEditPage,
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
  {
    path: '/login',
    name: 'login',
    component: LoginPage,
  },
  {
    path: '/login-redirect',
    name: 'login-redirect',
    component: LoginRedirectPage,
  },
];

export default RouteList;
