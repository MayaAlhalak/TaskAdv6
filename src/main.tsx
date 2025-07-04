import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Root from './component/Root/Root'
import { Provider } from 'react-redux'
import store from './redux/store'
import { Blog } from './Pages/Blog/Blog'
import Newsletter from './Pages/Newsletter/Newsletter'


const router = createBrowserRouter ([
  {
    path: "/",
    element: <Root/>,
    children : [
      {
        path: "",
        element: <Home/>
      }, 
      {
        path : "/blog/:id",
        element : <Blog/>
      },
      {
        path : "/newsletter",
        element : <Newsletter/>
      }
    ]
  },
])


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
  </StrictMode>,
)
