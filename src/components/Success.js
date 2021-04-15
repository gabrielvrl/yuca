import React from 'react';
import { withRouter } from 'react-router';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';

import './MyAccount.css';

function Success({ history }){

    function handleClick(e) {
        e.preventDefault()
        history.push('/')
    }

    return(
        <div className="containerMyAccount">
            <hr style={{ backgroundColor: '#13c081' }}></hr>
            <h1>Sua operação foi um sucesso! <VerifiedUserIcon style={{ color: '#13c081', fontSize: '27px'}} /> </h1>
            <h3>Clique no botão abaixo para retornar à pagina inicial.</h3>
            <button onClick={handleClick} className="successButton">VOLTAR</button>
        </div>
    );
}

export default withRouter(Success)