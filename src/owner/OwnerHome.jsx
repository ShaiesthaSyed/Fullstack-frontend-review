import { useState,useEffect } from 'react';

export default function OwnerHome() 
{
     const [owner, setOwner] = useState("");
     
     useEffect(() => {
       const storedOwner = sessionStorage.getItem('owner');
       if (storedOwner) {
         setOwner(JSON.parse(storedOwner));
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
      <h3>Hello {owner.name}</h3>
    </div>
  )
}