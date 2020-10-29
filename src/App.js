import React, { useState } from 'react';
import { render } from 'react-dom';
import './App.css';
import AppContext from './context/Context';
import Mainlist from './components/Mainlist';

function App() {
  const contextHook = useState('test');
  return (
    <React.StrictMode>
      <AppContext.Provider value={contextHook}>
        <div className="main">
          <h1>Hello There.</h1>
          <Mainlist title="Testerino" />
        </div>
      </AppContext.Provider>
    </React.StrictMode>
  );
}

export default App;
