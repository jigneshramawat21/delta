import { Route, Routes, Link } from 'react-router-dom';
import ContactMessages from "./ContactMessages";
import Blog from '../pages/Blog';
import Training from '../pages/AdminPanel';
import '../pages/AdminD.css'

function AdminDashbord() {
    return (
        <div className="container mt-3">
            <div className="header">
                <div className="one">
                <h1>Admin Dashboard</h1>
                </div>
          
            <div className="two">
            <nav>
           <Link to="/admin-dashboard/adminPanel" >Training</Link>
           <Link to="/admin-dashboard/BlogPanel" >Blog</Link>
           <Link to="/admin-dashboard/ContactMessages" >Contact</Link>
            </nav>
            </div>
            </div>
            

       
            <Routes>
                <Route path="adminPanel" element={<Training />} />
                <Route path="BlogPanel" element={<Blog />} />
                <Route path="ContactMessages" element={<ContactMessages />} />
            </Routes>
        </div>
    );
}

export default AdminDashbord;
