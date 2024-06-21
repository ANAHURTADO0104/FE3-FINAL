import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../Components/css/Detail.css";
import { appContext } from "../Context/Context";
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const { state } = useContext(appContext);
  const [dentist, setDentist] = useState({});
  const params = useParams();

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${params.id}`)
      .then((res) => {
        setDentist(res.data);
      });
  }, []);

  return (
    <div
      className={
        "container-detail " + (state.theme == "dark" && "dark-container-detail")
      }
    >
      <div className="detail">
        <h1>{dentist.name}</h1>
        <div>
          <b>Identificador:</b> {dentist.id}
        </div>
        <div>
          <b>Correo:</b> {dentist.email}
        </div>
        <div>
          <b>Telefono:</b> {dentist.phone}
        </div>
        <div>
          <b>Sitio web:</b> {dentist.website}
        </div>
      </div>
    </div>
  );
};

export default Detail;
