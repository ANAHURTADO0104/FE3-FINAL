import React, { useContext } from "react";

import Card from "../Components/Card";
import { appContext } from "../Context/Context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const { state } = useContext(appContext);

  return (
    <main className="">
      <div
        className={"card-grid " + (state.theme == "dark" && "dark-card-grid")}
      >
        {state.dentists.map((dentist) => {
          return <Card dentist={dentist} key={dentist.id} />;
        })}
      </div>
    </main>
  );
};

export default Home;
