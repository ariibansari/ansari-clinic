import { useState, useEffect } from 'react';
import { createContainer } from 'react-tracked';

const secretKey = import.meta.env.VITE_ENCRYPTION_SECRET_KEY;

const encodeState = (state) => {
  const encodedState = btoa(JSON.stringify(state));
  const encryptedState = encrypt(encodedState, secretKey);
  return encryptedState;
};

const decodeState = (encryptedState) => {
  const decryptedState = decrypt(encryptedState, secretKey);
  if (decryptedState) {
    try {
      return JSON.parse(atob(decryptedState));
    } catch (error) {
      console.error('Error decoding state:', error);
    }
  }
  return {};
};

const encrypt = (data, key) => {
  // Implement your encryption algorithm here
  // This is a simplified example, you should use a secure encryption algorithm
  return data.split('').reverse().join('') + key;
};

const decrypt = (encryptedData, key) => {
  // Implement your decryption algorithm here
  // This is a simplified example, you should use the corresponding decryption algorithm
  const encryptedKey = encryptedData?.substring(encryptedData.length - key.length);
  if (encryptedKey === key) {
    return encryptedData.substring(0, encryptedData.length - key.length).split('').reverse().join('');
  }
  return null;
};

const useValue = () => {
  const initialState = decodeState(localStorage.getItem('encodedState')) || {};
  const [state, setState] = useState(initialState);

  useEffect(() => {
    localStorage.setItem('encodedState', encodeState(state));
  }, [state]);

  return [state, setState];
};

export const {
  Provider,
  useTrackedState,
  useUpdate: useSetState,
} = createContainer(useValue);
