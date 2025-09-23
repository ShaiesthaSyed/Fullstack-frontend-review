//import React from 'react';
import './style.css'; 
import './home.css';

export default function Home() {
  return (
    <div className="home-container">
      <div className="admin-section">
        <h3>Admin</h3>
        <ul>
          <li>Admin Login</li>
          <li>Add Property Owner</li>
          <li>View/Delete Property Owners</li>
          <li>View Tenants</li>
          <li>Delete/Block Tenant</li>
          <li>View All Properties</li>
        </ul>
      </div>
      <div className="owner-section">
        <h3>Property Owner</h3>
        <ul>
          <li>Property Owner Login</li>
          <li>View/Update Profile</li>
          <li>Add New Property</li>
          <li>View Properties</li>
          <li>View Bookings</li>
        </ul>
      </div>
      <div className="tenant-section">
        <h3>Tenant</h3>
        <ul>
          <li>Registration</li>
          <li>Tenant Login</li>
          <li>View/Update Profile</li>
          <li>Book a Property</li>
          <li>View Booked Properties</li>
        </ul>
      </div>
    </div>
  );
}