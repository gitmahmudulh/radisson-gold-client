import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import bannerImage1 from '../../assets/home/01.jpg';
import bannerImage2 from '../../assets/home/02.jpg';
import bannerImage3 from '../../assets/home/03.jpg';

const Banner = () => {
    return (
        <div>
            <Carousel>
                <div>
                    <img src={bannerImage1} />
                </div>
                <div>
                    <img src={bannerImage2} />
                </div>
                <div>
                    <img src={bannerImage3} />
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;