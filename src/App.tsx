import { Routes, Route } from 'react-router-dom';
import Welcome from './components/Welcome';
import GetStarted from './pages/GetStarted';
import Demo from './pages/Demo';
import Dashboard from './pages/Dashboard';
import Orders from './pages/Orders';
import Token from './pages/Token';
import Assistant from './pages/Assistant';
import Profile from './pages/Profile';
import UploadPrescription from './pages/UploadPrescription';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/get-started" element={<GetStarted />} />
      <Route path="/demo" element={<Demo />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/token" element={<Token />} />
      <Route path="/upload-prescription" element={<UploadPrescription />} />
      <Route path="/assistant" element={<Assistant />} />
      <Route path="/profile" element={<Profile />} />
      {/* Fallback route */}
      <Route path="*" element={<Welcome />} />
    </Routes>
  );
}

export default App;
