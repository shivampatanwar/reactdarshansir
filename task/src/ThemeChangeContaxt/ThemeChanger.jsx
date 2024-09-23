import React from 'react'


export let ContextAPI = React.createContext();

let theme={
    light:{
        backgroundColor: 'white',
        color: 'black'
    },
    dark:{
        backgroundColor: 'black',
        color: 'white'
    }
}

const ThemeChanger = ({children}) => {
  return (
    <ContextAPI.Provider value={theme}>
      {children}
    </ContextAPI.Provider>
  )
}

export default ThemeChanger
