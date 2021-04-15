import React from 'react';
import { withRouter } from 'react-router';
import ErrorIcon from '@material-ui/icons/Error';

import './MyAccount.css';

function PageNotFound({ history }){

    function handleClick(e) {
        e.preventDefault()
        history.push('/')
    }

    return(
        <div className="containerMyAccount">
            <hr style={{ backgroundColor: 'red' }}></hr>
            <h1>Página não encontrada. <ErrorIcon style={{ color: 'red', fontSize: '27px'}} /> </h1>
            <h3>Clique no botão abaixo para retornar à pagina principal.</h3>
            <button onClick={handleClick} className="successButton" style={{ backgroundColor: "red" }} >VOLTAR</button>
        </div>
    );
}

export default withRouter(PageNotFound)