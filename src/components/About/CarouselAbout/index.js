import React from 'react';
import { Container   } from 'react-bootstrap';
import {Slide  , Box , LinkHome , Span , Title , Desc } from './style.js'

const CarouselAbout = () => {
    return(
        <Slide>
              <Container>
                  <Box>
                  <LinkHome to="/">Home</LinkHome>
                  <i className="fas fa-angle-double-right"></i>
                  <Span>About Company</Span>
                  <Title>About Company</Title>
                  <Desc>Mauris ornare tellus nec urna tincidunt, eget posuere velit tempus.</Desc>
                  </Box>
              </Container>
        </Slide>
    )
}
export default CarouselAbout;