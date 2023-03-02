import React from "react";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return (
    <div
      className="fixed top-0 left-0 w-full h-full z-20 bg-[rgba(0,0,0,0.75)] cursor-pointer"
      onClick={props.closeModal}
    ></div>
  );
};

const ModalOverlay = (props) => {
  return (
    <div className="fixed top-0 left-0 w-full max-w-[70%] h-full lg:h-[600px] z-30 lg:top-[10%] lg:left-[30%] lg:w-[500px]">
      {props.children}
    </div>
  );
};

const portalElement = document.getElementById("modal");

function Modal(props) {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop closeModal={props.closeModal}></Backdrop>,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.content}</ModalOverlay>,
        portalElement
      )}
    </>
  );
}

export default Modal;
