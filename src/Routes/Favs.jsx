import React, { useContext, useState } from "react";
import Card from "../Components/Card";
import { appContext } from "../Context/Context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const { state } = useContext(appContext);

  return (
    <>
      <div
        className={"card-grid " + (state.theme == "dark" && "dark-card-grid")}
      >
        {state.favorites.map((dentist) => {
          return <Card dentist={dentist} key={dentist.id} />;
        })}
      </div>
    </>
  );
};

export default Favs;
