import Carousel from 'react-bootstrap/Carousel';

function CarouselCard() {
    return (
        <Carousel data-bs-theme="dark">
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/assets/imagen1.jpg"
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="assets/imagen2.jpg"
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 h-100"
                    src="/assets/imagen3.jpg"
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
        
    );
}

export default CarouselCard;