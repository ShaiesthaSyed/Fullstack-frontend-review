import { useState,useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './owner.css';
import OwnerHome from './OwnerHome';
import OwnerProfile from './OwnerProfile';
import OwnerLogin from './OwnerLogin';
import { useAuth } from '../contextapi/AuthContext';
import AddProperty from './AddProperty';
import ViewPropertiesByOwner from './ViewPropertiesByOwner';
import ViewBookings from './ViewBookings';

export default function OwnerNavBar() 
{
  const { setIsOwnerLoggedIn } = useAuth(); 

  const handleLogout = () => 
 {
  setIsOwnerLoggedIn(false);
  sessionStorage.clear()
  };

  return (
    <div>
      <nav className="navbar">
        <div className="logo">Welcome Property Owner</div>
        <ul className="nav-links">
          <li><Link to="/ownerhome">Home</Link></li>
          <li><Link to="/ownerprofile">Owner Profile</Link></li>
          <li><Link to="/addproperty">Add New Property</Link></li>
          <li><Link to="/viewpropertiesbyowner">View Properties</Link></li>
          <li><Link to="/viewbookings">View Bookings</Link></li>
          <li><Link to="/managerlogin" onClick={handleLogout}>Logout</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/ownerhome" element={<OwnerHome />} exact />
        <Route path="/ownerprofile" element={<OwnerProfile/>} exact />
        <Route path="/addproperty" element={<AddProperty/>} exact />
        <Route path="/viewpropertiesbyowner" element={<ViewPropertiesByOwner/>} exact />
        <Route path="/viewbookings" element={<ViewBookings/>} exact />
        <Route path="/ownerlogin" element={<OwnerLogin/>} exact />
      </Routes>
    </div>
  );
}