import React from 'react';

function Termek(props) {
    return (
        <div className="col-sm-4">
            <div className="card" style={{ width: '18rem' }}>
                <img src="path/to/image.jpg" className="card-img-top" alt="Product Image" />
                <div className="card-body">
                    <p className="card-text">{props.termek.title}</p>
                </div>
            </div>
        </div>
    );
}

export default Termek;
