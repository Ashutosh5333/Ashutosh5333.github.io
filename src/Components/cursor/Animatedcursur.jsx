import React from 'react'
// import Animatedcursur
import AnimatedCursor from "react-animated-cursor"

export const Animatedcursur = () => {


  return (
    <div>
     <AnimatedCursor 
     innerSize={15}
      outerSize={20}
    //   color='193, 11, 111'
      color="46, 115, 16"
    //  color="180, 16, 16"
  
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={5}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link'
      ] }/>

    </div>
  )
}
