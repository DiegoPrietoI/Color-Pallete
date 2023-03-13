import React from "react";

import './SavedPalletes.css'

const SavedPalletes = (props) => {
    return(
    <div className="pallete-div">
        <div className='bin--div'>
            <p>
                {props.value}
            </p>
            <img src={props.image} className='bin--image'/>
        </div>
        <div className='saved--combinations'>
            <button className='button--selector2'></button>
            <button className='button--selector2'></button>
            <button className='button--selector2'></button>
            <button className='button--selector2'></button>
            <button className='button--selector2'></button>
        </div>
    </div>
    )
  }

  export default SavedPalletes