import React from 'react';
import Body from '../components/Body/Body';
import Carosuel from '../components/Carosuel/Carosuel';
import Mark from '../components/Mark/Mark';
import Na from '../components/Nav/Na';
import What from '../components/What/What';
import Nav from '../components/Nav/Nav';
import Footer from '../components/Footer/Footer';

export default function HomePage() {
  return (
    <div>
      <Nav />
      <Na />
      <Carosuel />
      <Mark />
      <What />
      <Body />
      <Footer/>
    </div>
  );
}
