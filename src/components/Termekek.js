import React, { useContext } from 'react'
import Termek from './Termek'
import { ApiContext } from '../contexts/ApiContext'

function Termekek() {
    // itt kell végigmenni az objektumlistán
    const {termekLista} = useContext(ApiContext);
  return (
    <div className="row">
        {termekLista.map((termek) =>{
            return <Termek termek={termek} key = {termek.id} />
        })}
        
    </div>
  );
}

export default Termekek

