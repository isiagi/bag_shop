import React from 'react'
import './App.css';
import Body from './components/Body/Body';
import Carosuel from './components/Carosuel/Carosuel';
import Mark from './components/Mark/Mark';
import Nav from './components/Nav/Nav';
import What from './components/What/What';
import Last from './components/Last/Last'

function App() {
  return (
    <div className="">
      <Nav />
      <Carosuel />
      <Body />
      <Mark />
      <What />
      <Body />
      <Last />
    </div>
  );
}

export default App;
