import React from 'react';
import { Carousel } from 'react-bootstrap';
import './style.css'

const Slider = () => {
    return(
        <Carousel>
  <Carousel.Item>
    <div className="overlay"></div>
    <img
      className="image-slide d-block w-100"
      src="images/slider/1.jpg"
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
      src="images/slider/2.jpg"
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
      src="images/slider/3.jpg"
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
      src="images/slider/4.jpg"
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