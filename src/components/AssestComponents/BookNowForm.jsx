import React, { useContext, useState } from 'react';
import "../../componentsCss/BookNowModal.css";  
import { AppContext } from '../../App';

function BookNowForm({ onClose }) {
  const { setBook } = useContext(AppContext);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    service: '', // Added service field
    preferredDate: '', // Added preferredDate field
    preferredTime: '', // Added preferredTime field
    comments: '', // Added comments field
    file1: null,
    file2: null,
    annualMaintenance: false, 
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
            Service:
            <select name="service" value={formData.service} onChange={handleInputChange} required>
              <option value="">Select a service</option>
              {/* <option value="Television Repair">Television Repair</option> */}
              {/* <option value="Washing Machine Repair">Washing Machine Repair</option> */}
              {/* <option value="Microwave Oven Repair">Microwave Oven Repair</option> */}
              <option value="Television service">Television service</option>
              <option value="Washing Machine service">Washing Machine service</option>
              <option value="Microwave Oven service">Microwave Oven service</option>
              <option value="Refridgerator service">Refridgerator service</option>
              <option value="Dishwasher service">DishWasher service</option>
              <option value="AirConditioner service">AirConditioner service</option>
            </select>
          </label>
          {/* <div className="booknow-checkbox-container">
            <input
              type="checkbox"
              name="annualMaintenance"
              checked={formData.annualMaintenance}
              onChange={handleCheckboxChange}
            />
            I agree to the annual maintenance charges
          </div> */}
          <div className="booknow-checkbox-container">
            <input
              type="checkbox"
              name="annualMaintenance"
              checked={formData.annualMaintenance}
              onChange={handleCheckboxChange}
            />
            I agree to proceed with initial charges of 300/-
          </div>
          <label>
            Preferred Date:
            <input type="date" name="preferredDate" value={formData.preferredDate} onChange={handleInputChange} required />
          </label>
          <label>
            Preferred Time:
            <input type="time" name="preferredTime" value={formData.preferredTime} onChange={handleInputChange} required />
          </label>
          <label>
            Comments:
            <textarea name="comments" value={formData.comments} onChange={handleInputChange}></textarea>
          </label>
          <label>
            Upload Image 1:
            <input type="file" name="file1" onChange={handleFileChange} />
          </label>
          <label>
            Upload Image 2:
            <input type="file" name="file2" onChange={handleFileChange} />
          </label>
         
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default BookNowForm;
