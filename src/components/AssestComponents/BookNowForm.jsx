import React, { useContext, useState } from 'react';
import "../../componentsCss/BookNowModal.css";  
import { AppContext } from '../../App';

function BookNowForm({ onClose }) {
  const {setBook}=useContext(AppContext);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    file1: null,
    file2: null,
    annualMaintenance: false, // Add state for the checkbox
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: checked,
    }));
  };

  const handleFileChange = (e) => {
    const { name } = e.target;
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      [name]: file,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    //here we need at setstate from context api
    setBook((prevBook) => [...prevBook, formData]);
    onClose();
  };

  return (
    <div className="booknow-modal-overlay">
      <div className="booknow-modal-content">
        <button className="booknow-close-button" onClick={onClose}>×</button>
        <h2>Book Now</h2>
        <form className="booknow-form" onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" name="name" value={formData.name} onChange={handleInputChange} required />
          </label>
          <label>
            Phone:
            <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} required />
          </label>
          <label>
            Email (optional):
            <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
          </label>
          <label>
            Address:
            <textarea name="address" value={formData.address} onChange={handleInputChange} required></textarea>
          </label>
          <label>
            Upload Image 1:
            <input type="file" name="file1" onChange={handleFileChange} />
          </label>
          <label>
            Upload Image 2:
            <input type="file" name="file2" onChange={handleFileChange} />
          </label>
          <div className="booknow-checkbox-container">
            <input
              type="checkbox"
              name="annualMaintenance"
              checked={formData.annualMaintenance}
              onChange={handleCheckboxChange}
            />
            I agree to the annual maintenance charges
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default BookNowForm;
