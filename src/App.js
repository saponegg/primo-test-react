import React from "react";
import "./style.css";
import Primo from "./Primo";
import Componente1 from "./Componente1";
import Prodotto from "./Product"; //posso dargli il nome che voglio io nel primo parametro
import Passaggio from "./Passaggio_valori";
import oggetto1 from "./Oggetti.js"; // questo mi serve per importare gli oggetti che poi uso con passaggio



export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <Primo/> 
      <Componente1/>
      <Prodotto/>
      <Passaggio 
      nome={oggetto1.nome}
      cognome={oggetto1.cognome}
      anni={oggetto1.anni}
      />
      <p> Qui ripeto la stessa cosa fatta sopra ma con una sintassi diversa e più compatta  ovvero utilizzando lo spread operator</p>
      <Passaggio {... oggetto1}
      />
      

    </div>

  );
}
