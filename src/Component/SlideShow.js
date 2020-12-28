
import React from 'react';
import { Slide } from 'react-slideshow-image';
import "react-slideshow-image/dist/styles.css"

const Slideshow = (props) => {
  
  const zoomInProperties = {
    indicators: true,
    scale: 1.4
  }
  return (
    <div>
        <Slide easing="ease">
            {props.image.map((each, index) => (
                <div key={index} style={{width: "100%"}}>
                <img style={{ objectFit: "cover", width: "100%" }} src={`${process.env.PUBLIC_URL + each}`} />
                </div>
            ))}
        </Slide>
    </div>
  )
}

export default Slideshow;