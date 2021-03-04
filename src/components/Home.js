import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router';

import './Home.css'

import api from '../services/api'
import metroIcon from '../assets/metroIcon.svg';
// import apartamentPhoto from '../assets/apartament.png'
// Should i use the image on Figma or the image that comes from the API?

import { ToastContainer } from 'react-toastify';

function Home({ history }){
    const [user, setUser] = useState({firstName: "Nome", lastName: "SN"})
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

    function handleClick(e){
        e.preventDefault();
        history.push('/hireservices')
    }

    return(
        <div className="containerHome">
            <hr />
            <h1>Bem vindo, {user.firstName}</h1>
            <h5>Atualmente você está morando em:</h5>
            <div className="infoDiv">
                <img src={apartment.image} alt="Apartament" />
                {/* <img src={apartamentPhoto} alt="Apartament" /> */} {/* Not sure which one i should use */}
                <div className="subInfoDiv">
                    <h4>{apartment.name} {apartment.number}</h4>
                    <h6>Quarto: {apartment.room} </h6>
                    <div className="imgAndSubway">
                        <img src={metroIcon} alt="Metro" style={{ backgroundColor: "#FAA446", width:"16px", height:"16px", border: "2px solid #FAA446", borderRadius: "50%" }} />
                        <h6 style={{ margin: "0px 10px", flex: "none", order: 1, flexGrow: 0}}>{apartment.subwayStation.name} {apartment.subwayStation.distance}</h6>
                    </div>
                    <h4>R${apartment.price}</h4>
                </div>
            </div>
            <button onClick={handleClick} type="hireServices">CONTRATAR SERVIÇOS</button>
            <ToastContainer className="toastMessageSuccess" /> 
        </div>
    );
}

export default withRouter(Home)