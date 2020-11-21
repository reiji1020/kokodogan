
import React from 'react';
import { Slide } from 'react-slideshow-image';
import "react-slideshow-image/dist/styles.css"

const Slideshow = () => {
  const images = [
    `${process.env.PUBLIC_URL + '/img/turu.jpg'}`,
    `${process.env.PUBLIC_URL + '/img/turu2.jpg'}`,
    `${process.env.PUBLIC_URL + '/img/turu3.jpg'}`
  ];
  
  const zoomInProperties = {
    indicators: true,
    scale: 1.4
  }
  return (
    <div>
        <Slide easing="ease">
            {images.map((each, index) => (
                <div key={index} style={{width: "100%"}}>
                <img style={{ objectFit: "cover", width: "100%" }} src={each} />
                </div>
            ))}
        </Slide>
    </div>
  )
}

export default Slideshow;