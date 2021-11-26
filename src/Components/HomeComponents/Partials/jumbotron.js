import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import image1 from '../../../images/avengers.jpg'
import image2 from '../../../images/suicidesquard_jumbo.jpg'
import image3 from '../../../images/interstellar.jpg'

const Jumbotron = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block"
                    src={ image1 }
                    alt="Avengers"
                />
                <Carousel.Caption>
                    <h3>Avengers</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block"
                    src={ image2 }
                    alt="Suicide Squad"
                />

                <Carousel.Caption>
                    <h3>Suicide Squad</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block"
                    src={ image3 }
                    alt="Interstellar"
                />

                <Carousel.Caption>
                    <h3>Interstellar</h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default Jumbotron;