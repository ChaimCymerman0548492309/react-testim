import React, { useState, useEffect } from 'react';

interface QRCodeDisplayProps {
  qr: string;
}

const QRCodeDisplay: React.FC<QRCodeDisplayProps> = ({ qr }) => {
  const [qrData, setQRData] = useState<string | null>(null);
  const [displayInfo, setDisplayInfo] = useState<boolean>(false);

  useEffect(() => {
    setQRData(qr);
  }, [qr]);

  const toggleDisplayInfo = () => {
    setDisplayInfo(!displayInfo);
  };

  return (
    <div>
      {qrData ? (
        <div>
          <img src={qrData} alt="QR Code" />
          <button onClick={toggleDisplayInfo}>Toggle Display</button>
        </div>
      ) : null}

      {displayInfo && qrData ? (
        <div>
          <h2>QR Code Information</h2>
          <p>URL: {qrData}</p>
          <p>Size: {qrData.length}</p>
          <p>Date & Time: {new Date().toLocaleString()}</p>
        </div>
      ) : null}
    </div>
  );
};

export default QRCodeDisplay;



