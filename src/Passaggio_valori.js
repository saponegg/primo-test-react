import React from "react";

const oggetto1={
nome:"marco",
cognome:"peppe",
anni:25
};

const oggetto2={
  veicolo:"moto",
  marca:"honda",
  prezzo:1200
  };




const Passaggio_valori = (props) =>{
return(
  <React.Fragment>
<p>{props.nome}</p>
<p>{props.cognome}</p>
<p>{props.anni}</p>

</React.Fragment>
);
};

export default Passaggio_valori;