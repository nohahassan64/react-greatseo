import React from 'react';
import { Carousel } from 'react-bootstrap';
import imgSlide1 from '../../../images/slider/1.jpg'
import imgSlide2 from '../../../images/slider/2.jpg'
import imgSlide3 from '../../../images/slider/3.jpg'
import imgSlide4 from '../../../images/slider/4.jpg'
import './style.css'

const Slider = () => {
    return(
        <Carousel>
  <Carousel.Item>
    <div className="overlay"></div>
    <img
      className="image-slide d-block w-100"
      src={imgSlide1}
      alt="First slide"
    />
    <Carousel.Caption>
    <h2>Best free SEO friendly <br/>website</h2>
    <p>Etiam felis elit, mollis posuere accumsan ac, dignissim a ligula. Nam ullamcorper ornare tortor sed dapibus. Aliquam ultrices vestibulum sodales. Aenean efficitur massa vel tellus dapibus pellentesque.</p>
    <button className="slide-button">Started Today</button>
    </Carousel.Caption>
  </Carousel.Item>
  
  <Carousel.Item>
  <div className="overlay"></div>
    <img
      className="image-slide d-block w-100"
      src={imgSlide2}
      alt="Third slide"
    />
    <Carousel.Caption>
    <h2>Marketing Website</h2>
    <p>Etiam felis elit, mollis posuere accumsan ac, dignissim a ligula. Nam ullamcorper ornare tortor sed dapibus. Aliquam ultrices vestibulum sodales. Aenean efficitur massa vel tellus dapibus pellentesque.</p>
    <button className="slide-button">Started Today</button>  
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
  <div className="overlay"></div>
    <img
      className="image-slide d-block w-100"
      src={imgSlide3}
      alt="Third slide"
    />
    <Carousel.Caption>
    <h2>Search engine, Analytics, <br/>Traffic</h2>
    <p>Etiam felis elit, mollis posuere accumsan ac, dignissim a ligula. Nam ullamcorper ornare tortor sed dapibus. Aliquam ultrices vestibulum sodales. Aenean efficitur massa vel tellus dapibus pellentesque.</p>
    <button className="slide-button">Started Today</button>   
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
  <div className="overlay"></div>
    <img
      className="image-slide d-block w-100"
      src={imgSlide4}
      alt="Third slide"
    />
    <Carousel.Caption>
    <h2>Social Networking</h2>
    <p>Etiam felis elit, mollis posuere accumsan ac, dignissim a ligula. Nam ullamcorper ornare tortor sed dapibus. Aliquam ultrices vestibulum sodales. Aenean efficitur massa vel tellus dapibus pellentesque.</p>
    <button className="slide-button">Started Today</button> 
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    )
}
export default Slider;