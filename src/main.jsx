import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import App from './App.jsx'
import Lead from './Pages/Lead.jsx'
import AddLead from './Pages/AddLead.jsx';
import EditLead from './Pages/EditLead.jsx';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';

const routes=createBrowserRouter([{
   path:'/',
   element:<App/>
},{
  path:"/leads",
  element:<Lead/>
},{
  path:"/add-lead",
  element:<AddLead/>
},{
  path:"/edit-lead/:id",
  element:<EditLead/>
}])
createRoot(document.getElementById('root')).render(
  <RouterProvider router={routes}>

  </RouterProvider>
)
