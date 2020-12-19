import React, { Component } from 'react';
import CarouselPricing from './CarouselPricing/index';
import PricingInfo from './PricingInfo/index';
import HappyClients from './../Home/HappyClients/index';
import ourpricing from './../Home/OurPricing/data'

class Pricing extends Component {
  render () {
    return (
      <div>
          <CarouselPricing />
          <PricingInfo data={ourpricing}/>
          <HappyClients />
      </div>
    );
  }
}

export default Pricing;