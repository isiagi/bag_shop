import React from 'react';
import Body from '../components/Body/Body';
import Carosuel from '../components/Carosuel/Carosuel';
import Mark from '../components/Mark/Mark';
import Na from '../components/Nav/Na';
import What from '../components/What/What';
import Last from '../components/Last/Last';
import Nav from '../components/Nav/Nav';

export default function HomePage() {
  return (
    <div>
      <Nav />
      <Na />
      <Carosuel />
      <Body />
      <Mark />
      <What />
      <Body />
      <Last />
    </div>
  );
}
