// src/components/SomeComponent.jsx
import React from 'react';

const SomeComponent = () => {
  const apiUrl = import.meta.env.VITE_API_URL;
  const apiKey = import.meta.env.VITE_API_KEY;

  return (
    <div>
      <p>API URL: {apiUrl}</p>
      <p>API Key: {apiKey}</p>
    </div>
  );
}

export default SomeComponent;
