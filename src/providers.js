import React from 'react'

import light from "./themes/light";
import dark from "./themes/dark";

import { ThemeProvider } from "styled-components";
import { Header } from "./containers/Header";
import usePersistedState from "./hooks/usePersistedState";


 const Providers = () => {
    const [theme, setTheme] = usePersistedState("theme", light);

const toogleTheme = () => {
  setTheme(theme.title === "light" ? dark : light);
};
    
    
    return (
        <ThemeProvider theme = {theme}>
            <Header toogleTheme = {toogleTheme}/>
        </ThemeProvider>
    )
}


export default Providers