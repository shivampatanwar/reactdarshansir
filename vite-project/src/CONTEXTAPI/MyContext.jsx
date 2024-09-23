import React from 'react'

export let ContextAPI = React.createContext();

const MyContext = ({children}) => {
  return (
    <div>
        <ContextAPI.Provider value={{ name: "shivam", "email": "shivampatanwar@gmail.com", "phone": 9685430664, "address": "Khanda, Bilaspur, Chhattisgarh, India 495559" }}>
            {children}
        </ContextAPI.Provider>
    </div>
  )
}

export default MyContext;
