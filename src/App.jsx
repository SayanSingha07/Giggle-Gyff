import React from 'react'
import './App.css'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import AppLayout from './layout/app-layout'
import Home from './pages/Home'
import CatagoryPage from './pages/CatagoryPage'
import SearchPage from './pages/SearchPage'
import FavourateGifPage from './pages/FavourateGifPage'
import Gifpage from './pages/Single-gifpage'



const router=createBrowserRouter([
  {
    element:<AppLayout  />,
    children:[
      {
        path:"/",
        element:<Home />
      },
      {
        path:"/:category",
        element:<CatagoryPage />
      },
      {
        path:"/search/:query",
        element:<SearchPage />
      },
      {
        path:"/:type/:slug",
        element:< Gifpage/>
      },
      {
        path:"/Favourate",
        element:<FavourateGifPage />
      }
    ]
  }
])

function App() {
  

  return (
   
 <>
<RouterProvider router={router}/>
<h1>sayan</h1>
 </>
  )
}

export default App
