import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router';

import api from '../services/api'
import './MyAccount.css';

function MyAccount({ history }){
    const [user, setUser] = useState({firstName: "Nome", lastName: "SN", email: "seuemail@email.com"})

    useEffect(() => {
        async function loadUser(){
          const response = await api.get('/me', {
              
          })
          setUser(response.data.user)
        }
        loadUser()
    },[])


    function handleHome(e) {
        e.preventDefault()
        history.push('/')
    }

    function handleMyAccount(e) {
        e.preventDefault()
        history.push('/myaccount')
    }

    function handleChangeServices(e) {
        e.preventDefault()
        history.push('/hireservices')
    }

    function handleSave(e) {
        e.preventDefault()
        console.log(user)
        history.push('/success')
    }


    function handleInput() {
        let firstName = document.getElementById("firstName")
        let lastName = document.getElementById("lastName")
        let email = document.getElementById("email") 
        setUser({firstName: firstName.value, lastName: lastName.value, email: email.value })
        // ai depois mandaria para a API, mas nao tem um metodo POST ou PUT no /me
    }

    return(
        <div className="containerMyAccount">
            <hr />
            <h1>Minha conta</h1>
            <hr id="DivHR"></hr>
            <h3>Suas informações de usuário:</h3>
            <ul>
                <li><span>Nome:</span> <input onBlur={handleInput} id="firstName" placeholder="Digite seu Nome" type="text" /></li>
                <li><span>Sobrenome:</span> <input onBlur={handleInput} id="lastName" placeholder="Digite seu Sobrenome" type="text" /></li>
                <li><span>Email:</span> <input onBlur={handleInput} id="email" placeholder="Digite seu Email" type="text" /></li>
            </ul>
            <button  onClick={handleSave} className="saveInput">SALVAR</button>
            <hr id="DivHR"></hr>
            <h6 style={{ marginBottom: 0 }}>Nota:</h6>
            <h6 style={{ marginTop: 0, marginBottom: 0 }}>Informações sobre seu apartamento atual e serviços contratados</h6>
            <h6 style={{ marginTop: 0}}><strong>NÃO</strong> são alterados nessa pagina</h6>
            <hr id="DivHR"></hr>
            <div className="finalButtons">
                <button onClick={handleHome}>HOME</button>
                <button onClick={handleMyAccount}>VOLTAR PARA MINHA CONTA</button>
                <button onClick={handleChangeServices}>ALTERAR SERVICOS</button>
            </div>
        </div>
    );
}

export default withRouter(MyAccount)