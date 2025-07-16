import React from 'react';
import './UploadOrScan.css';
import { useNavigate } from 'react-router-dom';
import './../Style/UploadOrScan.css';

const UploadOrScan = () => {
  const navigate = useNavigate();

  return (
    <div className="upload-or-scan">
      <div className="logo">StyleMate</div>

      <div className="options">
        {/* For Hair */}
        <div className="card">
          <button className="card-title">For Hair</button>
          <button className="card-button">Upload a photo</button>
          <button className="card-button">Scan your face</button>
        </div>

        {/* For Beard */}
        <div className="card">
          <button className="card-title">For Beard</button>
          <button className="card-button">Upload a photo</button>
          <button className="card-button">Scan your face</button>
        </div>
      </div>

      <button className="try-both">Try both</button>
    </div>
  );
};

export default UploadOrScan;
