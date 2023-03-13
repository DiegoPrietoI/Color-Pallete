import React from 'react';

import { CompactPicker } from 'react-color'

import './App.css';
import Header from './components/Header';
import Pallete from './images/pallete.png'
import Bin from './images/Icon.png'
import ColorSelection from './components/ColorSelection';
import SavedPalletes from './components/SavedPalletes'

function App() {
  
  const [hex, setHex] = React.useState('#fff')

  const [circleStyle, setCircleStyle] = React.useState({
    background: 'linear-gradient(130.53deg, #404040 17.47%, #404040 27.71%, #B0B0B0 27.72%, #B0B0B0 36.75%, #404040 36.76%, #404040 45.49%, #B0B0B0 45.5%, #B0B0B0 54.23%, #404040 54.24%, #404040 63.27%, #B0B0B0 63.27%, #B0B0B0 71.71%, #404040 71.71%)',
    height: '50px',
    width: '50px'
  })

  const handleCircleClick = () => {
    switch(circleStyle.height) {
      case '50px':
        setCircleStyle({
          background: hex,
          height: '60px',
          width: '60px'
        }); 
        break;
      
      case '60px':
        setCircleStyle({ 
          height: '50px',
          width: '50px'
        });
        break;
    }
  }
    
  return (
    
    <>
      <div className="App">
        <Header image={Pallete}/>
      </div>
        <ColorSelection onClick={handleCircleClick} style={{
          height: circleStyle.height,
          width: circleStyle.width,
          background: circleStyle.background
        }}/>
      <div className='sketch--picker'>
        <CompactPicker 
        color = {hex}
        onChange={(color) => {
          setHex(color.hex)
        }}
        />
      </div>
      <form className='div--input'> 
        <div>
          <label className='label--input' htmlFor='color-input'>Name</label>
          <br></br>
          <input className='color--input' type='text' placeholder='Website color scheme' id='color-input'/> 
        </div>       
        <div>
          <button className='color--button'>+</button>
        </div>         
      </form>

      <h3 style={{
        margin: '30px',
        textAlign: 'center',
      }}>Saved palletes</h3>
      <div className='saved--palletes'>        
        <SavedPalletes image={Bin}/>
        <SavedPalletes image={Bin}/>
        <SavedPalletes image={Bin}/>
        <SavedPalletes image={Bin}/>
        <SavedPalletes image={Bin}/>
      </div>
    </>

  );
}

/* no he conseguido implementar el conditional rendering para que los saved palletes aparezcan solo cuando el submit button del form sea clickado. Tampoco he conseguido cambiar el estilo de los 
divs utilizando state, aunque sinceramente no entiendo por qué no. */

export default App;
