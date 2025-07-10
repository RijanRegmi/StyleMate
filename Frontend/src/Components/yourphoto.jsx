import React, { useState } from 'react';
import '../style/YourPhoto.css';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import ovalImage from '../assets/oval.png';
import sinImage from '../assets/sin.png';

function YourPhoto() {
  const navigate = useNavigate();
  const [message, setMessage] = useState('');

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const faceShape = detectFaceShapeFromFileName(file.name.toLowerCase());

    if (faceShape === 'oval') {
      navigate('/ovalface');
    }
     else if (faceShape === 'square') {
    navigate('/squareface');
  } else if (faceShape === 'rectangle') {
    navigate('/rectangleface');
  }

    else {
      setMessage('Face shape could not be determined. Please rename the file with "oval", "square", or "rectangle".');
    }
  };

  const detectFaceShapeFromFileName = (fileName) => {
    if (fileName.includes('oval')) return 'oval';
    if (fileName.includes('square')) return 'square';
    if (fileName.includes('rectangle')) return 'rectangle';
    return null;
  };

  return (
    <div className="my-container">
      <button className="back-button" onClick={() => navigate('/login')} >
        <FaArrowLeft size={30} color="black" />
      </button>

      <div className="my-container1">
        <h1>StyleMate</h1>
      </div>

      <div className="header">
        <h2>Your photo</h2>
      </div>

      {/* Hidden File Input */}
      <input
        type="file"
        accept="image/*"
        id="upload-photo"
        style={{ display: 'none' }}
        onChange={handlePhotoUpload}
      />

      <button
        className="my-container2"
        onClick={() => document.getElementById('upload-photo').click()}
      >
        Upload your photo
      </button>

      {message && <p style={{ textAlign: 'center', color: 'red' }}>{message}</p>}

      <div className="my-container3">
        <p>
          Since your face is Oval/Square/Rectangle <br />
          We recommend you these hair designs:
        </p>

        <div className="circle-container">
          <div>
            <img src={sinImage} alt="style" className='circle' />
          </div>
          <button className="circle"></button>
          <button className="circle"></button>
          <button className="circle"></button>
        </div>

        <p>You can try these too</p>

        <div className="circle-container">
          <button className="circle">
           <div >
             <img src={ovalImage} alt="style" className='circle' /></div>
          </button>
          <button className="circle"></button>
          <button className="circle"></button>
          <button className="circle"></button>
        </div>
      </div>
    </div>
  );
}

export default YourPhoto;
