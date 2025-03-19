// import React, { useContext, useState } from "react";
// import "../../componentsCss/BookNowModal.css";
// import { AppContext } from "../../App";

// function BookNowForm({ onClose }) {
//   const { setBook } = useContext(AppContext);
//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     email: "",
//     address: "",
//     service: "", // Added service field
//     preferredDate: "", // Added preferredDate field
//     preferredTime: "", // Added preferredTime field
//     comments: "", // Added comments field
//     file1: null,
//     file2: null,
//     annualMaintenance: false,
//     amcCondition: "",
//     companyMake: "",
//     customMake: "",
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleCheckboxChange = (e) => {
//     const { name, checked } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: checked,
//     }));
//   };

//   const handleFileChange = (e) => {
//     const { name } = e.target;
//     const file = e.target.files[0];
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: file,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form Data:", formData);
//     setBook((prevBook) => [...prevBook, formData]);
//     onClose();
//   };

//   return (
//     <div className="booknow-modal-overlay">
//       <div className="booknow-modal-content">
//         <button className="booknow-close-button" onClick={onClose}>
//           ×
//         </button>
//         <h2>Book Now</h2>
//         <form className="booknow-form" onSubmit={handleSubmit}>
//           <label>
//             Name*:
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleInputChange}
//               required
//             />
//           </label>
//           <label>
//             Phone*:
//             <input
//               type="tel"
//               name="phone"
//               value={formData.phone}
//               onChange={handleInputChange}
//               required
//             />
//           </label>
//           <label>
//             Email (optional):
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleInputChange}
//             />
//           </label>
//           <label>
//             Address*:
//             <textarea
//               name="address"
//               value={formData.address}
//               onChange={handleInputChange}
//               required
//             ></textarea>
//           </label>
//           <label>
//             Service*:
//             <select
//               name="service"
//               value={formData.service}
//               onChange={handleInputChange}
//               required
//             >
//               <option value="">Select a service</option>
//               {/* <option value="Television Repair">Television Repair</option> */}
//               {/* <option value="Washing Machine Repair">Washing Machine Repair</option> */}
//               {/* <option value="Microwave Oven Repair">Microwave Oven Repair</option> */}
//               <option value="Television service">Television service</option>
//               <option value="Washing Machine service">
//                 Washing Machine service
//               </option>
//               <option value="Microwave Oven service">
//                 Microwave Oven service
//               </option>
//               <option value="Refridgerator service">
//                 Refrigerator service
//               </option>
//               <option value="Dishwasher service">DishWasher service</option>
//               <option value="AirConditioner service">
//                 AirConditioner service
//               </option>
//             </select>
//           </label>

//           {/* hahd start */}
//           <label>
//             Company Make*:
//             <select
//               name="companyMake"
//               value={formData.companyMake}
//               onChange={handleInputChange}
//               required
//             >
//               <option value="">Select company</option>
//               {formData.service === "Television service" ||
//                 formData.service === "Washing Machine service" ||
//                 formData.service === "Microwave Oven service" ||
//                 formData.service === "Refridgerator service" ||
//                 formData.service === "Dishwasher service" ||
//                 formData.service === "AirConditioner service" ||( <option value="LG">LG</option>)}
//               {<option value="SAMSUNG">SAMSUNG</option>}
//               {<option value="PANASONIC">PANASONIC</option>}
//               {<option value="VU TELEVISION">VU TELEVISION</option>}
//               {<option value="SONY">SONY</option>}
//               {<option value="TCL">TCL</option>}
//               {<option value="ACCER">ACCER</option>}
//               {<option value="REDMI">REDMI</option>}
//               {<option value="REALME">REALME</option>}
//               {<option value="ONEPLUS">ONEPLUS</option>}
//               {<option value="XIAOMI">XIAOMI</option>}
//               {<option value="BPL">BPL</option>}
//               {<option value="ONIDA">ONIDA</option>}
//               {<option value="MICROMAX">MICROMAX</option>}
//               {<option value="VIDEOCON">VIDEOCON</option>}
//               {<option value="PHILIPS">PHILIPS</option>}
//               {<option value="TOSHIBHA">TOSHIBHA</option>}
//               {<option value="BOSCH">BOSCH</option>}
//               {<option value="VOLTAS BEKO">VOLTAS BEKO</option>}
//               {<option value="KELVINATOR">KELVINATOR</option>}
//               {<option value="IFB">IFB</option>}
//               {<option value="WHIRLPOOL">WHIRLPOOL</option>}
//               {<option value="HITACHI">HITACHI</option>}
//               {<option value="SIEMENS">SIEMENS</option>}
//               {<option value="MIDEA">MIDEA</option>}
//               {<option value="BLUESTAR">BLUESTAR</option>}
//               {<option value="DAIKIN">DAIKIN</option>}
//               {<option value="MITSUBISHI">MITSUBISHI</option>}
//               {<option value="CARRIER">CARRIER</option>}
//               <option value="OTHERS">OTHERS</option>
//               {/* <option value="Dishwasher service">DishWasher service</option> */}
//               {/* <option value="AirConditioner service">AirConditioner service</option> */}
//             </select>
//           </label>
//           {/* hahd end */}
//           {/* hahd start */}
//           <label>
//             Amc Status*:
//             <select
//               name="amcCondition"
//               value={formData.amcCondition}
//               onChange={handleInputChange}
//               required
//             >
//               <option value="">Select Status</option>
//               <option value="Under Amc">Under Amc</option>
//               <option value="Amc Expired">Amc Expired</option>
//               <option value="Under Warranty">Under Warranty</option>
//               <option value="Warranty Expired">Warranty Expired</option>
//               {/* <option value="Dishwasher service">DishWasher service</option> */}
//               {/* <option value="AirConditioner service">AirConditioner service</option> */}
//             </select>
//           </label>
//           {/* hahd end */}

//           {formData.companyMake === "OTHERS" && (
//             <label>
//               provide your product make:
//               <input
//                 type="text"
//                 name="otherProductMake"
//                 value={formData.customMake}
//                 onChange={handleInputChange}
//               />
//             </label>
//           )}

//           {/* <div className="booknow-checkbox-container">
//             <input
//               type="checkbox"
//               name="annualMaintenance"
//               checked={formData.annualMaintenance}
//               onChange={handleCheckboxChange}
//             />
//             I agree to the annual maintenance charges
//           </div> */}
//           <div className="booknow-checkbox-container">
//             <input
//               type="checkbox"
//               name="annualMaintenance"
//               checked={formData.annualMaintenance}
//               onChange={handleCheckboxChange}
//             />
//             I agree to proceed with initial charges of 300/-
//           </div>
//           <label>
//             Preferred Date*:
//             <input
//               type="date"
//               name="preferredDate"
//               value={formData.preferredDate}
//               onChange={handleInputChange}
//               required
//             />
//           </label>
//           <label>
//             Preferred Time*:
//             <input
//               type="time"
//               name="preferredTime"
//               value={formData.preferredTime}
//               onChange={handleInputChange}
//               required
//             />
//           </label>
//           <label>
//             Comments:
//             <textarea
//               name="comments"
//               value={formData.comments}
//               onChange={handleInputChange}
//             ></textarea>
//           </label>
//           <label>
//             Upload Image 1:
//             <input type="file" name="file1" onChange={handleFileChange} />
//           </label>
//           <label>
//             Upload Image 2:
//             <input type="file" name="file2" onChange={handleFileChange} />
//           </label>

//           <button type="submit">Submit</button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default BookNowForm;

import React, { useContext, useState } from "react";
import "../../componentsCss/BookNowModal.css";
import { AppContext } from "../../App";

function BookNowForm({ onClose }) {
  const { setBook } = useContext(AppContext);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    service: "",
    preferredDate: "",
    preferredTime: "",
    comments: "",
    file1: null,
    file2: null,
    annualMaintenance: false,
    amcCondition: "",
    companyMake: "",
    customMake: "",
  });

  // Mapping services to relevant company makes
  const companyOptions = {
    "Television service": [
      "LG",
      "SAMSUNG",
      "PANASONIC",
      "VU TELEVISION",
      "SONY",
      "TCL",
      "REDMI",
      "REALME",
      "ONEPLUS",
      "XIAOMI",
      "BPL",
      "ONIDA",
      "MICROMAX",
      "VIDEOCON",
      "PHILIPS",
      "TOSHIBHA",
    ],
    "Washing Machine service": [
      "LG",
      "SAMSUNG",
      "PANASONIC",
      "BOSCH",
      "VOLTAS BEKO",
      "KELVINATOR",
      "IFB",
      "WHIRLPOOL",
      "HITACHI",
      "SIEMENS",
    ],
    "Microwave Oven service": [
      "LG",
      "SAMSUNG",
      "PANASONIC",
      "IFB",
      "WHIRLPOOL",
      "HITACHI",
      "MIDEA",
    ],
    "Refrigerator service": [
      "LG",
      "SAMSUNG",
      "PANASONIC",
      "WHIRLPOOL",
      "HITACHI",
      "BOSCH",
      "SIEMENS",
      "MIDEA",
    ],
    "Dishwasher service": ["BOSCH", "SIEMENS", "WHIRLPOOL", "IFB"],
    "AirConditioner service": [
      "LG",
      "SAMSUNG",
      "VOLTAS BEKO",
      "HITACHI",
      "DAIKIN",
      "MITSUBISHI",
      "CARRIER",
      "BLUESTAR",
    ],
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
      ...(name === "service" ? { companyMake: "" } : {}), // Reset companyMake when service changes
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
    console.log("Form Data:", formData);
    setBook((prevBook) => [...prevBook, formData]);
    onClose();
  };

  return (
    <div className="booknow-modal-overlay">
      <div className="booknow-modal-content">
        <button className="booknow-close-button" onClick={onClose}>
          ×
        </button>
        <h2>Book Now</h2>
        <form className="booknow-form" onSubmit={handleSubmit}>
          <label>
            Name*:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            Phone*:
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            Email (optional):
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Address*:
            <textarea
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              required
            ></textarea>
          </label>
          <label>
            Service*:
            <select
              name="service"
              value={formData.service}
              onChange={handleInputChange}
              required
            >
              <option value="">Select a service</option>
              {Object.keys(companyOptions).map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>
          </label>

          {/* Company Make Dropdown (Conditional Rendering) */}
          {formData.service && (
            <label>
              Company Make*:
              <select
                name="companyMake"
                value={formData.companyMake}
                onChange={handleInputChange}
                required
              >
                <option value="">Select company</option>
                {companyOptions[formData.service]?.map((company) => (
                  <option key={company} value={company}>
                    {company}
                  </option>
                ))}
                <option value="OTHERS">OTHERS</option>
              </select>
            </label>
          )}

          {/* Custom input if "OTHERS" is selected */}
          {formData.companyMake === "OTHERS" && (
            <label>
              Provide your product make:
              <input
                type="text"
                name="customMake"
                value={formData.customMake}
                onChange={handleInputChange}
              />
            </label>
          )}

          <label>
            Amc Status*:
            <select
              name="amcCondition"
              value={formData.amcCondition}
              onChange={handleInputChange}
              required
            >
              <option value="">Select Status</option>
              <option value="Under Amc">Under Amc</option>
              <option value="Amc Expired">Amc Expired</option>
              <option value="Under Warranty">Under Warranty</option>
              <option value="Warranty Expired">Warranty Expired</option>
            </select>
          </label>

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
            Preferred Date*:
            <input
              type="date"
              name="preferredDate"
              value={formData.preferredDate}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            Preferred Time*:
            <input
              type="time"
              name="preferredTime"
              value={formData.preferredTime}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            Comments:
            <textarea
              name="comments"
              value={formData.comments}
              onChange={handleInputChange}
            ></textarea>
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
