import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import "c:/Users/PC1/Desktop/chaim cymerman/week 10 testeime/testim project/node_modules/@testing-library/jest-dom/extend-expect";
import QRForm from './QRForm';
import QRCodeDisplay from './QRCodeDisplay';

test('QRForm renders correctly', () => {
  const { getByPlaceholderText } = render(<QRForm />);
  const inputElement = getByPlaceholderText('Enter URL');
  expect(inputElement).toBeInTheDocument();
});

test('QRForm input captures user input', () => {
  const { getByPlaceholderText } = render(<QRForm />);
  const inputElement = getByPlaceholderText('Enter URL');
  fireEvent.change(inputElement, { target: { value: 'https://example.com' } });
  expect(inputElement.value).toBe('https://example.com');
});

const mockQR = 'https://example.com/qrcode';

test('QRCodeDisplay renders correctly with QR', () => {
  const { getByAltText } = render(<QRCodeDisplay qr={mockQR} />);
  const qrImage = getByAltText('QR Code');
  expect(qrImage).toBeInTheDocument();
});

test('QRCodeDisplay toggles display of QR data', () => {
  const { getByText } = render(<QRCodeDisplay qr={mockQR} />);
  const toggleButton = getByText('Toggle Display');
  
  fireEvent.click(toggleButton);
  const infoElement = getByText('QR Code Information');
  expect(infoElement).toBeInTheDocument();

  fireEvent.click(toggleButton);
  expect(infoElement).not.toBeInTheDocument();
});
