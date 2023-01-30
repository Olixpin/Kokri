import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { Error } from "./pages/Error"
import { Location } from "./pages/Routes/"
import "./index.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/",
    component: App,
    element: <App />,
    errorElement: <Error />,
  },

  {
    path: "/location",
    component: App,
    element: <App />,
  },
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
)
