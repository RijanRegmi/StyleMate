import React from 'react';
import '../style/YourPhoto.css';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function OvalFace() {
    const navigate = useNavigate();
  return (
    <>
      <div className="my-container">
       
       <button className="back-button" onClick={() => navigate('/yourphoto')} >
  <FaArrowLeft size={30}  color='black' />
</button>
        <div className="my-container1">
            <h1>StyleMate</h1>
        </div>
       <div className='header'>
        <h2>Your photo</h2>
       </div>
        <button className='my-container2' onClick={() => navigate('/ovalface')}>
          updade photot
        </button>

        <div className='my-container3'>
          <p>Since your face is Oval/Square/Rectangle <br/>We recommended you these hair designs</p>
          
          <div className="circle-container">
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            </div>
            <p>You can try these too</p>
             <div className="circle-container">
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            </div>
            
        </div>
      </div>
    </>
  );
}

export default OvalFace;
