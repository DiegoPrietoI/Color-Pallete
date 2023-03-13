import React from 'react'
import './Header.css'


const Header = props => {
    return (
        <div className='header'>
        <img src={props.image} className='header--image'/>
        <h1 className='header--title'>Color palette generator</h1>
      </div>
    )
}

export default Header