import React from 'react';
import { LogBox } from 'react-native';
import Home from './src/views/Home';

LogBox.ignoreLogs(['Warning: ...']);

export default function App() {
  return (
    <Home/>
  );
}

