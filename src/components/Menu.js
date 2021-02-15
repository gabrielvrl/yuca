import React from 'react';
import { withRouter } from 'react-router';

import './Menu.css';

function Menu({ history }){

    function handleYuca(e){
        e.preventDefault()
        history.push('/')
    }

    function handleConta(e){
        e.preventDefault()
        history.push('/myaccount')
    }

    return(
        <div className="containerMenu">
            <div className="options">
                <button onClick={handleYuca} >MEU YUCA</button>
                <button onClick={handleConta} style={{color: "black"}} >MINHA CONTA</button>
            </div>
        </div>
    );
}

export default withRouter(Menu)