import React,{useContext} from 'react'
import Switch from 'react-switch'

import {ThemeContext} from 'styled-components'

export const Header = ({toogleTheme}) =>  {
    const { colors, title} = useContext(ThemeContext)
    
    return (
        <div className="header">
            <Switch
            onChange={toogleTheme}
            checked={title === 'dark'}
            checkedIcon={false}
            uncheckedIcon={false}
            height = {10}
            width = {40}
            handleDiameter={20}
            ofColor={colors.primary}
            onColor = {colors.background}
            />
        </div>
    )
}
