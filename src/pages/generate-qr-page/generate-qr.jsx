import React, { useState, useEffect } from "react";
import { QRCodeCanvas } from "qrcode.react";
import axios from "axios";
import "../generate-qr-page/generate-qr.css"; // Import custom CSS
import { message } from "antd";

const QRGenerator = () => {
  const [url, setUrl] = useState(""); // State to hold the URL from the backend
  const [qrColor, setQrColor] = useState("#000000"); // State for QR code color
  const [bgColor, setBgColor] = useState("#ffffff"); // State for QR code background color
  const [generated, setGenerated] = useState(true); // State to track if QR is generated

  // Simulate fetching the URL from a backend endpoint
  useEffect(() => {
    axios.get("/api/qr-link")
      .then(response => {
        setUrl(response.data.link);
      })
      .catch(error => {
        console.error("Error fetching the URL", error);
      });
  }, []);

  // Handler for generating QR code
  const handleGenerate = (e) => {
    e.preventDefault();
    setGenerated(true);
    console.log(generated)
    message.success('QR Generated Successfully')
  };

  return (
    <div className="qr-generator-container">
      <div className="qr-generator-box">
        <h1 className="qr-generator-heading">QR Code Generator</h1>
        
        {/* QR Code Customization Form */}
        <form onSubmit={handleGenerate} className="qr-generator-form">
          {/* URL Display */}
          <div className="form-group">
            <label htmlFor="url">URL:</label>
            <input
              type="text"
              id="url"
              value={url}
              disabled
              className="input-field"
            />
          </div>

          {/* Color Customization */}
          <div className="form-group colors">
            <div className="color-picker">
              <label htmlFor="qrColor">QR Color:</label>
              <input
                type="color"
                id="qrColor"
                value={qrColor}
                onChange={(e) => setQrColor(e.target.value)}
                className="input-color"
              />
            </div>
            <div className="color-picker">
              <label htmlFor="bgColor">Background Color:</label>
              <input
                type="color"
                id="bgColor"
                value={bgColor}
                onChange={(e) => setBgColor(e.target.value)}
                className="input-color"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button type="submit" className="generate-button">
            Generate QR Code
          </button>
        </form>

        
      </div>
      {/* QR Code Display */}
      {generated && (
          <div className="qr-code-display">
            <h2 className="generated-heading">Generated QR Code:</h2>
            <QRCodeCanvas value={url} fgColor={qrColor} bgColor={bgColor} size={200} />
          </div>
        )}
    </div>
  );
};

export default QRGenerator;
