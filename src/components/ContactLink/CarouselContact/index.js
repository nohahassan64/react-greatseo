import React from 'react';
import { Container   } from 'react-bootstrap';
import {Slide  , Box , Link , Span , Title , Desc } from '../../About/CarouselAbout/style.js'

const CarouselContact = () => {
    return(
        <Slide>
              <Container>
                  <Box>
                  <Link href="/">Home</Link>
                  <i className="fas fa-angle-double-right"></i>
                  <Span>Contact</Span>
                  <Title>Contact</Title>
                  <Desc>Mauris ornare tellus nec urna tincidunt, eget posuere velit tempus.</Desc>
                  </Box>
              </Container>
        </Slide>
    )
}
export default CarouselContact;