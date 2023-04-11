import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home'
import Blog from './components/Blog'
import Stats from './components/Stats'
import AppliedJobs from './components/AppliedJobs'
import JobDetails from './components/JobDetails'
import ErrorPage from './components/ErrorPage'



const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('/category.json'),
        // loader: () => fetch('features.json')
      },
      {
        path: '/jobDetails/:id',
        element: <JobDetails></JobDetails>,
        loader: () => fetch('/features.json')
        
      },
      {
        path: '/appliedJobs',
        element: <AppliedJobs></AppliedJobs>,
        loader: () => fetch('/features.json')
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: '/stats',
        element: <Stats></Stats>
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render( <RouterProvider router={router}></RouterProvider>)
