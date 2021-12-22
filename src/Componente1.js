import React from "react";
//qui ho un return multiplo di elementi racchiusi in un div
// oppure uso React.Fragment per racchiudere tutto e considerarli elementi separati
//className serve per indicare le classi di stile ovvero il vecchio class
const Componente1 = () => {
  return (
    <React.Fragment>
    <div>
      <h1 className="prova">Componente 1</h1>
      <p>Questo componente racchiude 2 elementi e per questo li ho racchiuysi in una div </p>
    </div>
    <Componenti_Innestati/>
    </React.Fragment>
  );
};
//è possibile creare componenti innestati

const Componenti_Innestati = () => {
  return (
    <React.Fragment>
      <p>componenti innestati: </p>
      <Ciao1/>
      <Ciao2/>
    </React.Fragment>
  );
};

//creo due componenti da innestare poi
const Ciao1 = () =>{
return <p> elemento 1 </p>
};

const Ciao2 = () =>{
  return <p> elemento 2</p>
};


export default Componente1;