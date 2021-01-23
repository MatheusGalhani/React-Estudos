import React from 'react';
import { LogBox } from 'react-native';
import Home from './src/views/Home';
import Task from './src/views/Task';

LogBox.ignoreLogs(['Warning: ...']);

export default function App() {
  return (
    <Task/>
  );
}

