import React, { Component } from 'react';
import CarouselServices from './CarouselServices/index';
import ServicesInfo from './ServicesInfo/index';
import HappyClients from './../Home/HappyClients/index';

class Services extends Component {
  render () {
    return (
      <div>
          <CarouselServices />
          <ServicesInfo />
          <HappyClients />
      </div>
    );
  }
}

export default Services;