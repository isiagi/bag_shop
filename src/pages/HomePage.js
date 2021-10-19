import React from 'react';
import Body from '../components/Body/Body';
import Carosuel from '../components/Carosuel/Carosuel';
import Mark from '../components/Mark/Mark';
import Na from '../components/Nav/Na';
// import What from '../components/What/What';
import Nav from '../components/Nav/Nav';
import Last from '../components/Last/Last';
import Varity from '../components/Varity/Varity';

export default function HomePage() {
  return (
    <div>
      <Nav />
      <Na />
      <Carosuel />
      <Body />
      {/* <What /> */}
      <Mark />
      <Varity />
      <Body />
      <Last/>
    </div>
  );
}

// TODO
// special items 
// categories below