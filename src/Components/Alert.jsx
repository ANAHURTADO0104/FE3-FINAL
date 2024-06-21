import { useContext } from "react";
import "./css/Alert.css";
import { appContext } from "../Context/Context";

const Alert = ({ setShowAlert }) => {
  const { state } = useContext(appContext);
  return (
    <div
      className={
        "alert-container " + (state.theme == "dark" && "dark-alert-container")
      }
    >
      <div className="alert">
        <h2>Enviado</h2>
        <p>Gracias por escribirnos, te contactaremos lo más pronto posible.</p>
        <button
          type="submit"
          onClick={() => {
            setShowAlert(false);
          }}
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default Alert;
