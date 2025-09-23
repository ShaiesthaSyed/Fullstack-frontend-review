import { useState,useEffect } from 'react';

export default function TenantHome() 
{
     const [tenant, setTenant] = useState("");
     
     useEffect(() => {
       const storedTenant = sessionStorage.getItem('tenant');
       if (storedTenant) {
        setTenant(JSON.parse(storedTenant));
       }
     }, []);
     
  return (
    <div
    style={{
        backgroundImage:'url("src/images/homepage .jpg")',// change this path accordingly
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '1000px',
        padding: '2px'
      }}
    >
      <h3 style={{ textAlign: "center"}}>Hello {tenant.name}</h3>
    </div>
  )
}