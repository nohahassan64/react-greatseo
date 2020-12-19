import React, { Component } from 'react';
import Slider from './Slider/index';
import WelcomeTo from './WelcomeTo/index';
import WhyChoose from './WhyChoose/index';
import SeoServices from './SeoServices/index'
import Counter from './Counter/index'
import OurPricing from './OurPricing/index'
import HappyClients from './HappyClients/index'
import { ourpricing , counter} from './OurPricing/data'

class Home extends Component {
  render () {
    return (
      <div>
          <Slider />
          <WelcomeTo />
          <WhyChoose />
          <SeoServices />
          <Counter data={counter} />
          <OurPricing data={ourpricing} />
          <HappyClients />
      </div>
    );
  }
}

export default Home;