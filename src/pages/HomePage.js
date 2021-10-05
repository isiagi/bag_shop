import React from 'react';
import Body from '../components/Body/Body';
import Carosuel from '../components/Carosuel/Carosuel';
import Mark from '../components/Mark/Mark';
import Na from '../components/Nav/Na';
import What from '../components/What/What';
import Last from '../components/Last/Last';
import Nav from '../components/Nav/Nav';
import Cover from '../components/Covered/Cover';
import { Helmet } from 'react-helmet';

export default function HomePage() {
  return (
    <div>
    <Helmet>
      <title>Smart Ways</title>
      <meta name="description" content="" />
    </Helmet>
      <Nav />
      <Na />
      <Carosuel />
      <Body />
      <Mark />
      {/* <Cover /> */}
      <What />
      <Body />
      <Last />
    </div>
  );
}
