import React from "react"
import { Btn } from "./components/index.jsx"
import { ArrowRightAltRounded } from "@mui/icons-material"
import "./App.css"

const App = () => {
  return (
    <div>
      <Btn text="More Work" Icon={ArrowRightAltRounded} />
    </div>
  )
}

export default App
