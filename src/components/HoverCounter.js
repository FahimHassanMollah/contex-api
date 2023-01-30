import React from 'react'

const HoverCounter = ({theme,switchTheme}) => {
    console.log('hover counter rendered');
  return (
    <div>
            <h1>HoverCounter theme is : {theme}</h1>
         <button onClick={switchTheme}>switch theke</button>
    </div>
   
  )
}

export default HoverCounter