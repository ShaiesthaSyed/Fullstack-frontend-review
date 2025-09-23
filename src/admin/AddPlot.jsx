import React, { useState } from 'react';
import axios from 'axios';
import config from '../config'

const AddPlot = () => 
{
  const [plot, setPlot] = useState({
    category: '',
    name: '',
    description: '',
    cost: '',
    url: ''
  });
  const [plotImage, setPlotImage] = useState(null);
  const [message, setMessage] = useState('');
  const [error,setError] = useState("")

  const handleChange = (e) => {
    setPlot({ ...plot, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setPlotImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => 
 {
    e.preventDefault();

    const formData = new FormData();
    formData.append('plotimage', plotImage);
    formData.append('category', plot.category);
    formData.append('name', plot.name);
    formData.append('description', plot.description);
    formData.append('cost', plot.cost);
    formData.append('url', plot.url);

    try 
    {
      const response = await axios.post(`${config.url}/plot/addplot`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      setMessage(response.data);
      setError("")

      //Clear form fields
    setPlot({
        category: '',
        name: '',
        description: '',
        cost: '',
        url: ''
      });
      setPlotImage();

    } 
    catch (error) 
    {
      console.log(error.message)
      setMessage("")
      setError(error.message);
    }
  };

  return (
    <div className="container mt-4"
     style={{
        backgroundImage:'url("src/images/homepage .jpg")',// change this path accordingly
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '1000px',
        padding: '2px'
      }}
    >
       <h3 style={{ textAlign: "center",textDecoration: "underline"}}>Add Plot</h3>
      {
            message?
            <p style={{textAlign: "center",color:"green",fontWeight:"bolder"}}>{message}</p>:
            <p style={{textAlign: "center",color:"red",fontWeight:"bolder"}}>{error}</p>
      }
      <form onSubmit={handleSubmit} encType="multipart/form-data"
      style={{ 
    backgroundColor: 'grey', 
    padding: '15px',
    borderRadius: '5px',
    maxWidth: '300px',}}
      >
      
      <div className="mb-3">
  <label>Category:</label>
  <select className="form-control" name="category" onChange={handleChange} required>
    <option value="">-- Select Category --</option>
     <option value="Residential">Residential</option>
        <option value="Commercial">Commercial</option>
        <option value="Industrial">Industrial</option>
        <option value="Land">Land</option>
        <option value="Other">Other</option>
  </select>
</div>


        <div className="mb-3">
          <label>Name:</label>
          <input type="text" className="form-control" name="name" onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label>Description:</label>
          <textarea className="form-control" name="description" rows="2" onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label>Cost:</label>
          <input type="number" step="0.01" className="form-control" name="cost" onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label>URL:</label>
          <input type="text" className="form-control" name="url" onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label>Plot Image:</label>
          <input type="file" className="form-control" onChange={handleImageChange} required />
        </div>
        <button type="submit" className="btn btn-primary">Add Plot</button>
      </form>
    </div>
  );
};

export default AddPlot;