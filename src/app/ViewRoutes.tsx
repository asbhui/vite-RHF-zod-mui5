import { HashRouter, Routes, Route } from 'react-router-dom';
import { NotFound } from '../shared/ui/NotFound';
import { Home } from '../shared/ui/Home';
import { Typos } from '../shared/ui/Typos';

export const ViewRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="typos" element={<Typos />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export const WrappedViewRoutes = () => (
  <HashRouter>
    <ViewRoutes />
  </HashRouter>
);
