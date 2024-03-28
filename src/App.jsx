import { RouterProvider } from "react-router-dom";
import './App.css'

import Routes from "./router";


function App() {

  return (
    <RouterProvider router={Routes} fallbackElement={<div>Loading...</div>} />
  )
}

export default App
