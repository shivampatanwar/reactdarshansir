import dom, { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'


createRoot(document.getElementById('root')).render( <App /> )


// createRoot(document.getElementById('root')).render( <App />)
// dom.createRoot(document.getElementById('root')).render( <App />)



// let element = React.createElement("h1",null, "Hi i am React");
// createRoot(document.getElementById('root')).render(element)








// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
