import React from "react"
import { createPortal } from "react-dom"
import { useAppContext } from "../../context/context"
import "./Modal.css"

const Backdrop = () => {
  const { closeModal } = useAppContext()
  return <div className="backdrop" onClick={closeModal} />
}

const ModalOverlay = (props) => {
  return (
    <div className={`modal-overlay ${props.className ? props.className : ""}`}>
      <div>{props.children}</div>
    </div>
  )
}

const portalElement = document.getElementById("overlays")

const Modal = (props) => {
  return (
    <>
      {createPortal(<Backdrop />, portalElement)}
      {createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </>
  )
}

export default Modal
