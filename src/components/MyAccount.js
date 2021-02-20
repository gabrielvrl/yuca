import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router';

import api from '../services/api'
import './MyAccount.css';

function MyAccount({ history }){
    const [user, setUser] = useState({firstName: "Nome", lastName: "SN", email: "seuemail@email.com"})
    const [apartment, setApartment] = useState({name: "Apartamento", number: 0, room: "X", subwayStation: {name: "Estação", distance: "0m"}})

    useEffect(() => {
        async function loadUser(){
          const response = await api.get('/me', {
              
          })
          setUser(response.data.user)
          setApartment(response.data.apartment)
        }
        loadUser()
    },[])

    const [userServices, setUserServices] = useState([])
    useEffect(() => {
        async function loadUser() {
            const response = await api.get('/me', {})
            setUserServices(response.data.services)
        }
        loadUser()
    },[])

    function servicesCode() {
        return userServices.map((userService) => {
            return (
                <ul key={userService.id}>
                    <li><span>Serviço {userService.id}:</span> {userService.name}</li>
                </ul>
            )
        })
    }

    function handleHome(e) {
        e.preventDefault()
        history.push('/')
    }

    function handleChangeInfo(e) {
        e.preventDefault()
        history.push('/changeaccountinformation')
    }

    function handleChangeServices(e) {
        e.preventDefault()
        history.push('/hireservices')
    }

    return(
        <div className="containerMyAccount">
            <hr />
            <h1>Minha conta</h1>
            <hr id="DivHR"></hr>
            <h3>Suas informações de usuário:</h3>
            <ul>
                <li><span>Nome:</span> {user.firstName}</li>
                <li><span>Sobrenome:</span> {user.lastName}</li>
                <li><span>Email:</span> {user.email}</li>
            </ul>
            <hr id="DivHR"></hr>
            <h3>Informações sobre seu apartamento atual:</h3>
            <ul>
                <li><span>Nome:</span> {apartment.name}, {apartment.number}</li>
                <li><span>Quarto:</span> {apartment.room}</li>
                <li><span>Estação próxima:</span> {apartment.subwayStation.name}, {apartment.subwayStation.distance}</li>
                <li><span>Preço:</span> R${apartment.price}</li>
            </ul>
            <hr id="DivHR"></hr>
            <h3>Seus serviços contratados:</h3>
            {servicesCode()}
            <div className="finalButtons">
                <button onClick={handleHome}>HOME</button>
                <button onClick={handleChangeInfo}>ALTERAR INFORMACOES</button>
                <button onClick={handleChangeServices}>ALTERAR SERVICOS</button>
            </div>
        </div>
    );
}

export default withRouter(MyAccount)