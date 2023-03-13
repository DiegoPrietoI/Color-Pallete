import React from "react";

import './ColorSelection.css'

const ColorSelection = (props) => {
    return(
        <div className='colour--selector'id={props.id} style={{
        height: props.style.height,
        width: props.style.width,
        background: props.style.background
      }}>
          <p>+</p>
        </div>
    )
  }

export default ColorSelection