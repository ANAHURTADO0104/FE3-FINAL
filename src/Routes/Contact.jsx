import React, { useContext, useState } from "react";
import Form from "../Components/Form";
import "../Components/css/Contact.css";
import { appContext } from "../Context/Context";
import Alert from "../Components/Alert";
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  const { state } = useContext(appContext);
  const [showAlert, setShowAlert] = useState(false);
  return (
    <div
      className={
        "container-contact " +
        (state.theme == "dark" && "dark-container-contact")
      }
    >
      <div className="contact">
        <h2>¿Qué deseas?</h2>
        <p>Envianos tu comentario y te contactaremos</p>
        <Form setShowAlert={setShowAlert} />
      </div>
      {showAlert && <Alert setShowAlert={setShowAlert} />}
    </div>
  );
};

export default Contact;
