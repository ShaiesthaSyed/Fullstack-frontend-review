import React, { useEffect, useState } from 'react';
import axios from 'axios';
import config from '../config';

export default function AdminHome() {
  const [tenantCount, setTenantCount] = useState(0);
  const [ownerCount, setOwnerCount] = useState(0);
  const [propertyCount, setPropertyCount] = useState(0);

  useEffect(() => {
    const fetchCounts = async () => {
      try {
        const tenantRes = await axios.get(`${config.url}/admin/tenantcount`);
        const ownerRes = await axios.get(`${config.url}/admin/ownercount`);
        const propertyRes = await axios.get(`${config.url}/admin/propertycount`);

        setTenantCount(tenantRes.data);
        setOwnerCount(ownerRes.data);
        setPropertyCount(propertyRes.data);
      } catch (error) {
        console.error("Error fetching counts:", error);
      }
    };

    fetchCounts();
  }, []);

  return (
    <div style={{ 
      textAlign: 'center', padding: '30px', backgroundColor: '#f9f9f9',
        backgroundImage:'url("src/images/homepage .jpg")',// change this path accordingly
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '1000px',
    
    }}
    >
      <h2>Welcome to Admin Dashboard</h2>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '25px', marginTop: '30px', flexWrap: 'wrap' }}>
        <div style={{ backgroundColor: 'rgb(177, 178, 179)', borderRadius: '12px', boxShadow: '0 4px 10px rgba(140, 131, 131, 0.81)', padding: '25px', width: '200px' }}>
          <h3 style={{ marginBottom: '10px', color: 'black' }}>Tenants</h3>
          <p style={{ fontSize: '28px', fontWeight: 'bold', color: 'red' }}>{tenantCount}</p>
        </div>
         <div style={{ backgroundColor: 'rgb(177, 178, 179)', borderRadius: '12px', boxShadow: '0 4px 10px rgba(140, 131, 131, 0.81)', padding: '25px', width: '200px' }}>
          <h3 style={{ marginBottom: '10px', color: 'black' }}>Owners</h3>
          <p style={{ fontSize: '28px', fontWeight: 'bold', color: 'blue' }}>{ownerCount}</p>
        </div>
         <div style={{ backgroundColor: 'rgb(177, 178, 179)', borderRadius: '12px', boxShadow: '0 4px 10px rgba(140, 131, 131, 0.81)', padding: '25px', width: '200px' }}>
          <h3 style={{ marginBottom: '10px', color: 'black' }}>Properties</h3>
          <p style={{ fontSize: '28px', fontWeight: 'bold', color: ' rgba(248, 0, 99, 0.81)' }}>{propertyCount}</p>
        </div>
      </div>
    </div>
  );
}