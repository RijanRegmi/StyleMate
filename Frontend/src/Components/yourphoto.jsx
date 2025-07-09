import React from 'react';
import '../style/YourPhoto.css';
import { FaArrowLeft } from 'react-icons/fa';

function YourPhoto() {
  return (
    <>
      <div className="my-container">
       
       <div className="back-button">
  <FaArrowLeft size={30}  color='black' />
</div>
        <div className="my-container1">
            <h1>StyleMate</h1>
        </div>
       <div className='header'>
        <h2>Your photo</h2>
       </div>
        <div className='my-container2'>
          
        </div>

        <div className='my-container3'>
          <p>Since your face is Oval/Square/RectangleWe recommended you these hair designs</p>
        </div>
      </div>
    </>
  );
}

export default YourPhoto;
