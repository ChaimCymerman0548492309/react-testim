import React, { useState } from 'react';
import QRForm from './components/QRForm';
import QRCodeDisplay from './components/QRCodeDisplay';

const App: React.FC = () => {
  const [qrUrl, setQrUrl] = useState<string>('');

  const handleQRUrlChange = (url: string) => {
    setQrUrl(url);
  };

  return (
    <div>
      <h1>QR Code Generator</h1>
      <QRForm onUrlChange={handleQRUrlChange} />
      <QRCodeDisplay qr={qrUrl} />
    </div>
  );
};

export default App;
