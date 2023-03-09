import { useState } from "react";

function Popup({ visible, setVisible, children }) {
  const handlerClosePopup = (event) => {
    if (event.target === event.currentTarget) {
      setVisible(false);
    }
  };

  return (
    <section
      onClick={handlerClosePopup}
      className={"popup " + (visible ? "popup_opened" : "")}
    >
      <div
        className="popup__inner popup__inner_type_form"
        onSubmit={() => {
          setVisible(false);
        }}
      >
        <button
          className="popup__button-close"
          type="button"
          aria-label="Закрыть поп-ап"
          onClick={() => {
            setVisible(false);
          }}
        ></button>
        {children}
      </div>
    </section>
  );
}

export default Popup;
