import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter } from 'react-router-dom';
import Router from './routes';
import { Global } from '@emotion/react';
import globalStyles from '@/styles/globalStyles';
import Header from './components/header';

const App: React.FC = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Global styles={globalStyles} />
        <div className='app'>
          <Header />
          <Router />
        </div>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
