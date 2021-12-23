import React from "react";

const Passaggio_valori = (props) =>{
return(
  <React.Fragment>
<span>Qui uso i dati di oggetto1 </span>
<p>{props.nome}</p>
<p>{props.cognome}</p>
<p>{props.anni}</p>
</React.Fragment>
);
};

export default Passaggio_valori;