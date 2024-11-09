import React, { useState, useContext } from 'react';
import { ApiContext } from '../../contexts/ApiContext';

function TermekUrlap() {
    const {postAdat} = useContext(ApiContext)
    // Minden űrlapnak saját state-je van, ami az űrlapadatokat kezeli. 
    const  [adat, setAdat] = useState({
                    title: '',
                    price: 100,
                    description: '',
                    image: '',
                    category: ''
    })
    
    

    function kuldesKezeles(event){
        event.preventDefault() //leszedi az alapért eseménykezelőt - php-s
        //összegyűjtjük az űrlapadatokat, összeállítunk egy objektumot, majd továbbküldjük a szerver felé post kéréssel
        console.log(adat);
        postAdat('/products', adat);
    }

    function valtKezeles(event) {
        // Creates a copy of the state and updates the relevant field
        const sv = { ...adat };
        sv[event.target.id] = event.target.value;
        setAdat(sv);
    }
  return (
    <div>
      <form onSubmit={kuldesKezeles}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Termék neve:</label>
          <input
            type="text"
            className="form-control"
            id="title"
            aria-describedby="titleHelp"
            value={adat.title}
            onChange={valtKezeles}
          />
          
        </div>

        <div className="mb-3">
          <label htmlFor="price" className="form-label">Termék ára:</label>
          <input
            type="number"
            min="100"
            max="1000000"
            className="form-control"
            id="price"
            aria-describedby="priceHelp"
            value={adat.price}
            onChange={valtKezeles}
          />
          
        </div>
        
        
        <div className="mb-3">
                    <label htmlFor="category" className="form-label">Termék kategória:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="category"
                        aria-describedby="categoryHelp"
                        value={adat.category}
                        onChange={valtKezeles}
                    />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default TermekUrlap;

