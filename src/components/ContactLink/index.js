import React, { Component } from 'react';
import CarouselContact from './CarouselContact/index';
import ContactInfo from './ContactInfo/index';

class ContactLink extends Component {
  render () {
    return (
      <div>
          <CarouselContact />
          <ContactInfo />
      </div>
    );
  }
}

export default ContactLink;