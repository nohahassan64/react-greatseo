import React, { Component } from 'react';
import CarouselStudy from './CarouselStudy/index';
import InfoStudy from './InfoStudy/index';
import HappyClients from './../Home/HappyClients/index';

class CaseStudy extends Component {
  render () {
    return (
      <div>
          <CarouselStudy />
          <InfoStudy />
          <HappyClients />
      </div>
    );
  }
}

export default CaseStudy;