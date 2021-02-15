import React from 'react';
import { withRouter } from 'react-router';

import './MyAccount.css';

function MyAccount(){

    return(
        <div className="containerMyAccount">
            <h1>Hello Yuca</h1>
        </div>
    );
}

export default withRouter(MyAccount)