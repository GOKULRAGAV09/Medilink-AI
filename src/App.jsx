import { Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Dashboard from './pages/medilink/Dashboard';
import PharmacyToken from './pages/medilink/PharmacyToken';
import OrderTracking from './pages/medilink/OrderTracking';
import MedicineAvailability from './pages/medilink/MedicineAvailability';
import PrescriptionHistory from './pages/medilink/PrescriptionHistory';
import UploadPrescription from './pages/medilink/UploadPrescription';
import AIMedicineAssistant from './pages/medilink/AIMedicineAssistant';
import Profile from './pages/medilink/Profile';

function App() {
  return (
    <LanguageProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/pharmacy-token" element={<PharmacyToken />} />
        <Route path="/order-tracking" element={<OrderTracking />} />
        <Route path="/medicine-availability" element={<MedicineAvailability />} />
        <Route path="/prescription-history" element={<PrescriptionHistory />} />
        <Route path="/upload-prescription" element={<UploadPrescription />} />
        <Route path="/ai-assistant" element={<AIMedicineAssistant />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </LanguageProvider>
  );
}

export default App;
