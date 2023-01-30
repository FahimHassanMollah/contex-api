// import React from 'react'
// import themeContext from '../context/themeContex'
// import HoverCounter from './HoverCounter'

// const Section = () => {

//   return (
//     <div>
//         <themeContext.Consumer>
//             {
//                 ({theme,switchTheme}) => <HoverCounter theme={theme} switchTheme={switchTheme}/>
//             }
//         </themeContext.Consumer>
//     </div>
//   )
// }

// export default Section




// using class component 
import React, { Component } from 'react'
import themeContext from '../context/themeContex';
import HoverCounter from './HoverCounter'
 class Section extends Component {
    shouldComponentUpdate(){
        return false;
    } 
      
    render() {
        console.log('rendered');
        const {theme,switchTheme} = this.context;
        console.log(theme);
        return (
            <div>
                 <HoverCounter theme={theme} switchTheme={switchTheme} />
            
            </div>
        )
    }
}


Section.contextType = themeContext;
export default Section;










// using function component 



// import React, { useContext } from 'react'
// import themeContext from '../context/themeContex'
// import HoverCounter from './HoverCounter'

// const Section = () => {
//     const {theme,switchTheme} = useContext(themeContext);

//   return (
//     <div>
      
            
//                  <HoverCounter theme={theme} switchTheme={switchTheme}/>
            
        
//     </div>
//   )
// }

// export default Section;