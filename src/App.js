import { useState } from "react";
import Section from "./components/Section";
import themeContext from "./context/themeContex";




function App() {
  const [theme, setTheme] = useState('blue');

  const switchTheme = (params) => {
    setTheme((currentTheme)=> (currentTheme === 'blue' ? 'red' : 'blue'));
  }
  return (
    <>
      <themeContext.Provider value={{theme:theme,switchTheme:switchTheme}}>
          <Section/>
      </themeContext.Provider>
    </>
  );
}

export default App;
