import React, { useState } from "react"
import "./Hamburger.css"
import { Modal } from "../Modal"
import { useAppContext } from "../../context/context"

const Hamburger = () => {
  const [open, setOpen] = useState(false)
  const { openModal } = useAppContext()

  return (
    <div>
      <div className="hamburger-menu">
        <button
          onClick={() => {
            setOpen(!open)
          }}
        >
          <span
            className="bar"
            style={{
              transform: open
                ? "translateX(0px) translateY(5px) rotate(45deg)"
                : "",
            }}
          ></span>
          <span
            className="bar"
            style={{
              transform: open
                ? "translateX(0px) translateY(-3px)  rotate(-45deg)"
                : "",
            }}
          ></span>
        </button>
      </div>

      {open && (
        <Modal className="background">
          <p>Hello world</p>
        </Modal>
      )}
    </div>
  )
}

export default Hamburger
