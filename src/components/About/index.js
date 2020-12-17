import React, { Component } from 'react';
import CarouselAbout from './CarouselAbout/index';
import WelcomeTo from './../Home/WelcomeTo/index';
import HappyClients from './../Home/HappyClients/index'

class About extends Component {
  render () {
    return (
      <div>
          <CarouselAbout />
          <WelcomeTo />
          <HappyClients />
      </div>
    );
  }
}

export default About;