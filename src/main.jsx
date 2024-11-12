import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './component/Root/Root';
import Home from './component/Home/Home';
import AppliedJob from './component/AppliedJob/AppliedJob';
import Statistic from './component/Statistic/Statistic';
import Jobs from './component/Jobs/Jobs';
import Blogs from './component/Blogs/Blogs';
import ErrorPage from './component/ErrorPage/ErrorPage';
import JobDetails from './component/JobDetails/JobDetails';

const router=createBrowserRouter([
  {
    path:"/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:'/applied',
        element:<AppliedJob></AppliedJob>,
        loader:()=>fetch("../jobs.json") // only loader for this project but its not a good way 
      },
      {
        path:'/statistics',
        element:<Statistic></Statistic>
      },
      {
        path:"/jobs",
        element:<Jobs></Jobs>
      },
      {
        path:"/blogs",
        element:<Blogs></Blogs>
      },
      {
        path:"/job/:id",
        element:<JobDetails></JobDetails>,
        loader:()=>fetch("../jobs.json")//only loader for this project  but its not a good way
      }
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
