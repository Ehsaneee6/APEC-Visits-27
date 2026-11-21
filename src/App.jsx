import { Route, Routes } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import HomePage from '@/features/landing/HomePage';
import ResultsPage from '@/features/results/ResultsPage';
import NexusPage from '@/features/nexus/NexusPage';
import ChoosePage from '@/features/nexus/ChoosePage';
import MultiversePage from '@/features/nexus/MultiversePage';
import ApplyPage from '@/features/forms/ApplyPage';
import AdminPage from '@/features/admin/AdminPage';
import NotFound from '@/features/NotFound';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="nexus" element={<NexusPage />} />
        <Route path="choose" element={<ChoosePage />} />
        <Route path="multiverse" element={<MultiversePage />} />
        <Route path="apply" element={<ApplyPage />} />
        <Route path="results" element={<ResultsPage />} />
        <Route path="admin" element={<AdminPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
