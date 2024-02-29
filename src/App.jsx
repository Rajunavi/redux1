

import './App.css'
import {RouterProvider, createBrowserRouter } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import About from './components/About'
import Home from './components/Home'
import Product from './components/Product'
import Contact from './components/Contact'



  const router = createBrowserRouter([{
    path:"/",
    element:<Dashboard />,
    children:[
        {
        index:true,
        element:<Home/>
        },
        
        {
            path:"about",
        element:<About/>
        },
        {
          path:"contact",
      element:<Contact/>
      }
    ]
},
{
  path:"product",
 element:<Product/>
 },])

  

function App(){
  return <RouterProvider router={router} />
}

export default App;
