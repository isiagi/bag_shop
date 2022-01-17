import React from 'react';
import Body from '../components/Body/Body';
import Body2 from '../components/Body/Body2';
import Carosuel from '../components/Carosuel/Carosuel';
import Mark from '../components/Mark/Mark';
import Na from '../components/Nav/g';
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
      <Mark />
      <Varity />
      <Body2 />
      <Last/>
    </div>
  );
}

// TODO
// special items 
// categories below