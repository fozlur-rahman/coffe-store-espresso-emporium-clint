import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import CreateCoffee from './components/CreateCoffee/CreateCoffee.jsx'
import UpdateCoffee from './components/UpdateCoffee/UpdateCoffee.jsx'
import Coffees from './components/Coffees/Coffees.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: < App ></App >,
    children: [
      {
        path: '/',
        element: <Coffees></Coffees>,
        loader: () => fetch(`http://localhost:5000/coffees`)
      },
      {
        path: '/create',
        element: <CreateCoffee></CreateCoffee>
      },
      {
        path: '/updateCoffee/:id',
        element: <UpdateCoffee></UpdateCoffee>,
        loader: ({ params }) => fetch(`http://localhost:5000/coffees/${params.id}`)
      }

    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
