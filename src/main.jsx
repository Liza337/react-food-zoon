import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Foods from './Components/Foods/Foods'
import NotFound from './Components/NotFound/NotFound'
import FoodsDetails from './Components/FoodsDetails/FoodsDetails'
import Orders from './Components/Orders/Orders'


const router= createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[

      {
        path:"/",
        element:<Home/>,
        loader: () => fetch("/food.json")

      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/foods",
        element:<Foods/>
      },

      {
        path:"/orders",
        element:<Orders/>
      },


      {
        path:"food/:foodId",
        element:<FoodsDetails/>,
        loader: async ({params}) =>{
          const res= await fetch("/food.json");
          const foods= await res.json();

          const findFood = foods.find(food => food.id == params.foodId);
          return findFood;


        }

      },
      // {
      //   path:"food/:foodId",
      //   element:<FoodsDetails/>
      // },

      {
        path:"*",
        element:<NotFound/>
      }
    ]

  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
    </RouterProvider>
  </React.StrictMode>,
)
