import React from 'react';
import { Route, Routes } from 'react-router-dom';
import RouteList from './RouteList';
import Template from '@/components/template';

const Router: React.FC = () => {
  return (
    <Template>
      <Routes>
        {RouteList.map((route) => (
          <Route
            path={route.path}
            key={`${route.name}:${route.path}`}
            element={<route.component />}
          />
        ))}
      </Routes>
    </Template>
  );
};

export default Router;
