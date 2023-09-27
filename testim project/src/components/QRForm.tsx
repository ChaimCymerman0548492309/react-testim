import React, { useState } from 'react';

interface QRFormProps {
  onUrlChange: (url: string) => void;
}

const QRForm: React.FC<QRFormProps> = ({ onUrlChange }) => {
  const [url, setUrl] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(event.target.value);
  };

  const generateQRCode = () => {
    if (url.trim() === '') {
      alert('Please enter a valid URL.');
      return;
    }

    // Call the onUrlChange function with the URL
    onUrlChange(url);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter URL"
        value={url}
        onChange={handleInputChange}
      />
      <button onClick={generateQRCode}>Generate QR Code</button>
    </div>
  );
};

export default QRForm;
