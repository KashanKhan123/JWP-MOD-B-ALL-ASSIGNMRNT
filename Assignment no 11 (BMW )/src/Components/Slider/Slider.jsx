import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from "./Slider";
import imggg from '../Slider/noam-cohen-OSHaoEjkj4M-unsplash.jpg'
function CarouselFadeExample() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <ExampleCarouselImage src={imggg} />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage src={imggg} />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage src={imggg} />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;