import { Route, createBrowserRouter, RouterProvider, createRoutesFromElements } from 'react-router-dom';
import { NotFound } from '../shared/ui/NotFound';
import { Home } from '../shared/ui/Home';
import { Typos } from '../shared/ui/Typos';

/* export const ViewRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="typos" element={<Typos />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export const WrappedViewRoutes = () => (
  <BrowserRouter>
    <ViewRoutes />
  </BrowserRouter>
);
 */

export const routesFromElements = createRoutesFromElements(
  <Route path="/">
    <Route index element={<Home />} />
    <Route path="typos" element={<Typos />} />
    <Route path="*" element={<NotFound />} />
  </Route>,
);

export const WrappedViewRoutes = () => <RouterProvider router={createBrowserRouter(routesFromElements)} />;
