import React, { Component } from 'react';
import Slider from './Slider/index';
import WelcomeTo from './WelcomeTo/index';
import WhyChoose from './WhyChoose/index';
import SeoServices from './SeoServices/index'
import Counter from './Counter/index'
import OurPricing from './OurPricing/index'
import HappyClients from './HappyClients/index'

class Home extends Component {
  render () {
    return (
      <div>
          <Slider />
          <WelcomeTo />
          <WhyChoose />
          <SeoServices />
          <Counter />
          <OurPricing />
          <HappyClients />
      </div>
    );
  }
}

export default Home;