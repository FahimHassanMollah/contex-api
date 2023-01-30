import createContex from "../components/lib";
import React from "react";

// const themeContext = createContex({
//     theme:'dark'
// });

const themeContext = React.createContext({
    theme:'dark'
});

export default themeContext;