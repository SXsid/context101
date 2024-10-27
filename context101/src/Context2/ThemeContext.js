//industy way to use context Api

import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    theme:"dark",
    // toggle:()=>{},//we wil need a state which will attach to dark and light theere fore using two fun
    lightTheme:()=>{},
    darkTheme:()=>{}
})

export const ThemeProvider = ThemeContext.Provider; //by defult value is alredy given 
// no need to import both usecontext and them context both 
export const useTheme=()=>{
    return useContext(ThemeContext)
}
