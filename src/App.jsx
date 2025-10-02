import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import './App.css'
import Layouts1 from './Layouts/Layouts1'
import Home from './Pages/Home'

function App() {

  const myroute = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<Layouts1 />}>
          <Route index element={<Home />}></Route>
        </Route>
      </Route>
    )
  )

  return (
    <>
      <RouterProvider router={myroute} />
    </>
  )
}

export default App
