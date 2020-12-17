import React, { Component } from 'react';
import CarouselPricing from './CarouselPricing/index';
import PricingInfo from './PricingInfo/index';
import HappyClients from './../Home/HappyClients/index';

class Pricing extends Component {
  render () {
    return (
      <div>
          <CarouselPricing />
          <PricingInfo />
          <HappyClients />
      </div>
    );
  }
}

export default Pricing;