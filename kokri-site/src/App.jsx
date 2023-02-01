import React from "react"
import "./App.css"
import { Footer } from "./layouts/Footer"
import { Outlet } from "react-router-dom"
import { Header } from "./layouts/Header"
import { Main } from "./layouts/Main"

const App = () => {
  return (
    <div>
      <Header />
      <Main />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
