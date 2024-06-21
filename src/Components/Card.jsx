import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { appContext } from "../Context/Context";
import "./css/Card.css";

const Card = ({ dentist }) => {
  const { dispatch } = useContext(appContext);

  return (
    <div className="card">
      <Link to={"/dentist/" + dentist.id}>
        <div className="circle">
          <h2>{dentist.id}</h2>
        </div>
        <div className="content">
          <div>
            <b>Nombre: </b>
            {dentist.name}
          </div>
          <div>
            <b>Usuario:</b> {dentist.username}
          </div>
        </div>
      </Link>

      <button
        onClick={() => dispatch({ type: "add-favorite", dentist })}
        className="favButton"
      >
        <b>Add fav</b>
      </button>
    </div>
  );
};

export default Card;
