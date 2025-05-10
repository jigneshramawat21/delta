import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import AdminPanel from './pages/AdminPanel';
import LoginForm from './pages/LoginForm';
import RegisterForm from './pages/RegisterForm';
import PrivateRoute from './pages/PrivateRoute';
import AdminDashbord from './pages/AdminDashboard';

function App() {
  return (
    <Router>
      <Routes>
        
        <Route path="/RegisterForm" element={<RegisterForm />} />
        <Route path="/" element={<LoginForm />} />
        <Route
          path="/admin-dashboard/*"
          element={
            <PrivateRoute>
              <AdminDashbord />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
