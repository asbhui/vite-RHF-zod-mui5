import { lazy } from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';

import ComboBox from '../shared/components/ComboBox';

const Root = lazy(() => import('../shared/ui/Root').then((module) => ({ default: module.Root })));
const Home = lazy(() => import('../shared/ui/Home').then((module) => ({ default: module.Home })));
const Typos = lazy(() => import('../shared/ui/Typos').then((module) => ({ default: module.Typos })));
const NotFound = lazy(() => import('../shared/ui/NotFound').then((module) => ({ default: module.NotFound })));

export const routesFromElements = createRoutesFromElements(
  <Route path="/" element={<Root />}>
    <Route index element={<Home />} />
    <Route path="typos" element={<Typos />} />
    <Route path="comboBox" element={<ComboBox />} />
    <Route path="*" element={<NotFound />} />
  </Route>,
);

export const WrappedViewRoutes = () => <RouterProvider router={createBrowserRouter(routesFromElements)} />;
