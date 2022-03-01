import logo from "./logo.svg";
import "./App.css";
import React, {useEffect, useState} from 'react'
import {BrowserRouter} from 'react-router-dom'



import Main from './components/Main/Main'

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Frontend Assesment - Fusuma</p>
      </header>
      <BrowserRouter>
      <body className="App-body">
        <Main />
      </body>
      </BrowserRouter>
    </div>
  );
}

export default App;
