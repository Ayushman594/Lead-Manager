import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import App from './App.jsx'
import Lead from './Pages/Lead.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom';

const routes=createBrowserRouter([{
   path:'/',
   element:<App/>
},{
  path:"/leads",
  element:<Lead/>
}])
createRoot(document.getElementById('root')).render(
  <RouterProvider router={routes}>

  </RouterProvider>
)
