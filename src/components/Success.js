import React from 'react';
import { withRouter } from 'react-router';

import './MyAccount.css';

function Success(){

    return(
        <div className="containerMyAccount">
            <h1>Hello Yuca</h1>
        </div>
    );
}

export default withRouter(Success)