import React, { useRef, useState } from 'react';
import './../Style/Lens.css';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

function Lens() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const fileInputRef = useRef(null);

  const [capturedImg, setCapturedImg] = useState(null);
  const [selectedFilter, setSelectedFilter] = useState(0);
  const [showPreview, setShowPreview] = useState(false);
  const [flashOn, setFlashOn] = useState(false);
  const [timer, setTimer] = useState(0);
  const [countdown, setCountdown] = useState(null);
  const [processedImg, setProcessedImg] = useState(null);
  const [faceShape, setFaceShape] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (error) {
      setError('Failed to start camera: ' + error.message);
    }
  };

  const flashEffect = () => {
    if (!flashOn) return;
    const flashDiv = document.createElement('div');
    flashDiv.style.position = 'fixed';
    flashDiv.style.top = '0';
    flashDiv.style.left = '0';
    flashDiv.style.width = '100vw';
    flashDiv.style.height = '100vh';
    flashDiv.style.backgroundColor = 'white';
    flashDiv.style.opacity = '0.8';
    flashDiv.style.zIndex = '9999';
    document.body.appendChild(flashDiv);
    setTimeout(() => {
      document.body.removeChild(flashDiv);
    }, 150);
  };

  const capturePhoto = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
    const imageDataURL = canvas.toDataURL('image/png');
    setCapturedImg(imageDataURL);
    flashEffect();
    processImage(imageDataURL);
  };

  const handleCaptureWithTimer = () => {
    if (timer === 0) {
      capturePhoto();
      return;
    }

    let count = timer;
    setCountdown(count);
    const interval = setInterval(() => {
      count -= 1;
      setCountdown(count);
      if (count === 0) {
        clearInterval(interval);
        setCountdown(null);
        capturePhoto();
      }
    }, 1000);
  };

  const triggerUpload = () => {
    fileInputRef.current.value = "";
    fileInputRef.current.click();
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      const imageDataURL = reader.result;
      setCapturedImg(imageDataURL);
      processImage(imageDataURL);
      fileInputRef.current.value = "";
    };
    reader.readAsDataURL(file);
  };

  const processImage = async (imageDataURL) => {
    setIsLoading(true);
    setError(null);
    try {
      console.log('Sending image to backend with hairstyle_idx:', selectedFilter);
      const response = await fetch('http://localhost:5000/process-image', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ image: imageDataURL, hairstyle_idx: selectedFilter + 1 }),
      });
      const data = await response.json();
      console.log('Backend response:', data);
      if (data.error) {
        setError(data.error);
        return;
      }
      setProcessedImg(data.result_image);
      setFaceShape(data.face_shape);
      console.log('Set processedImg:', data.result_image.substring(0, 50));
    } catch (error) {
      setError('Failed to process image: ' + error.message);
      console.error('Processing error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleFilterClick = (idx) => {
    setSelectedFilter(idx);
    if (capturedImg) {
      processImage(capturedImg);
    }
  };

  const handleDownload = () => {
    if (!processedImg && !capturedImg) {
      setError('No image to download');
      return;
    }
    const a = document.createElement('a');
    a.href = processedImg || capturedImg;
    a.download = 'processed-image.png';
    a.click();
  };

  return (
    <>
      <Header />
      <div className="lens-container">
        <div className="frame">
          <h2 className="title">Take or upload picture</h2>
          <p className="subtext">We'll show you how it looks on you using AI!</p>

          <div className="camera-box">
            <video ref={videoRef} autoPlay className="video-feed" />
            <button
              className={`icon-btn flash-btn ${flashOn ? 'active' : ''}`}
              onClick={() => setFlashOn(!flashOn)}
              title="Toggle Flash"
            >
              ⚡
            </button>
            <div className="timer-dropdown">
              <button className="icon-btn timer-btn" title="Timer">
                ⏱
              </button>
              <div className="timer-options">
                {[0, 3, 5, 10].map((val) => (
                  <div
                    key={val}
                    className={`timer-option ${timer === val ? 'selected' : ''}`}
                    onClick={() => setTimer(val)}
                  >
                    {val === 0 ? 'Off' : `${val}s`}
                  </div>
                ))}
              </div>
            </div>
            <button onClick={handleCaptureWithTimer} className="capture-btn"></button>
            {countdown !== null && <div className="countdown-overlay">{countdown}</div>}
          </div>

          <div className="button-group">
            <button className="upload-btn" onClick={triggerUpload}>Upload</button>
            <button onClick={startCamera} className="upload-btn">Start Camera</button>
          </div>

          <input
            type="file"
            accept="image/*"
            onChange={handleFileUpload}
            ref={fileInputRef}
            className="file-input-hidden"
          />

          <canvas ref={canvasRef} width="675" height="500" hidden />
        </div>

        <div className="frame">
          <h2 className="title">Your recommended output</h2>
          <div className="output-box">
            {isLoading ? (
              <p>Loading...</p>
            ) : error ? (
              <p className="error">{error}</p>
            ) : processedImg ? (
              <>
                <img src={processedImg} alt="Processed" className="captured-img" style={{ maxWidth: '100%', border: '2px solid red' }} />
                {faceShape && <p className="subtext">Predicted Face Shape: {faceShape}</p>}
              </>
            ) : (
              capturedImg && <img src={capturedImg} alt="Captured" className="captured-img" style={{ maxWidth: '100%' }} />
            )}
          </div>

          <button className="action-btn" onClick={() => setShowPreview(true)}>Preview</button>
          <button className="action-btn" onClick={handleDownload}>Download</button>

          <h3 className="subtext">Try These styles</h3>
          <div className="filters">
            {[...Array(7)].map((_, idx) => (
              <div
                key={idx}
                className={`filter-circle ${selectedFilter === idx ? 'selected-filter' : ''}`}
                onClick={() => handleFilterClick(idx)}
              ></div>
            ))}
          </div>
        </div>

        {showPreview && (processedImg || capturedImg) && (
          <div className="preview-popup">
            <div className="popup-content">
              <button className="close-btn" onClick={() => setShowPreview(false)}>✕</button>
              <img src={processedImg || capturedImg} alt="Preview" className="popup-img" />
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default Lens;