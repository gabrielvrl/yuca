import React from 'react';

import './Menu.css';

export default function Menu(){
    return(
        <div className="containerMenu">
            <div className="options">
                {/* Button or h1? */}
                <h1>MEU YUCA</h1>
                <h1 style={{color: "black"}} >MINHA CONTA</h1>
            </div>
        </div>
    );
}