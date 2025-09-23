export default function About() 
{
  return (
    <div 
    
    style={{ 
      backgroundColor:'black',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '10px',
        padding: '20px',
      textAlign: 'center', marginTop: '0px' }}>
     <h4 style={{ color: 'white' }}>I am in About Page</h4>
      <img 
        src="src/images/aboutus.jpg"  
        alt="About Image"
        style={{backgroundSize:'cover' }} 
      />
    </div>
  );
}