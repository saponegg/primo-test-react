import React from "react";
//qui ho un return multiplo di elementi racchiusi in un div
// oppure uso React.Fragment per racchiudere tutto e considerarli elementi separati
//ClassName serve per indicare le classi di stile ovvero il vecchio class
const Componente1 = () => {
  return (
    <React.Fragment>
    <div>
      <h1 ClassName="prova">Componente 1</h1>
      <p>Questo componente racchiude 2 elementi e per questo li ho racchiuysi in una div </p>
    </div>
    </React.Fragment>
  );
};

export default Componente1;