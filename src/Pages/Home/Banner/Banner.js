import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';
import banner from '../../../images/banner/banner.jpg';
import banner2 from '../../../images/banner/banner2.jpg';
import banner3 from '../../../images/banner/banner3.jpg'

const Banner = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner}
                        alt="First slide"
                        style={{height:'600px'}}
                    />
                    
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="Second slide"
                        style={{height:'600px'}}
                    />  
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner3}
                        alt="Third slide"
                        style={{height:'600px'}}
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;