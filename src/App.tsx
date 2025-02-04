import React, { useRef, useEffect } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Router from './routes';
import { Global } from '@emotion/react';
import globalStyles from '@/styles/globalStyles';
import Header from './components/header';

const AppContent: React.FC = () => {
  const location = useLocation();
  const nodeRef = useRef(null);

  // 페이지 전환 시 스크롤을 상단으로 이동
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <>
      <Header />
      <TransitionGroup>
        <CSSTransition key={location.pathname} timeout={300} classNames='page-transition'>
          <div ref={nodeRef}>
            <Router />
          </div>
        </CSSTransition>
      </TransitionGroup>
    </>
  );
};

const App: React.FC = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Global styles={globalStyles} />
        <div className='app'>
          <AppContent />
        </div>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
