import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router';

import './HireServices.css'

import api from '../services/api'

function HireServices({ history }){
    useEffect(() => {
        async function loadUser(){
          const response = await api.get('/me', {
          })
        }
        loadUser()
      },[])


    const [services, setServices] = useState([])

    useEffect(() => {
    async function loadServices(){
        const promise = await api.get('/services', {})
        setServices(promise.data)
    }
    loadServices()
    },[])


    console.log(services)


    function handleClick(e){
        e.preventDefault();
        console.log("Button Clicked")
    }

    return(
        <div className="containerHire">
            <hr />
            <h1>Serviços Contratados</h1>
            <div className="services">
                {services.map((service)=> (
                    <div className="servicesOptions" key={service.id}>
                        <input type="checkbox" name={service.name} value="names"/>
                        <label>{service.name}</label>
                        <h6>R${service.price}</h6>
                    </div>
                ))}

            <hr style={{ width: 620, height:1, backgroundColor: "#F2F2F2", flexDirection: "column", margin: "22px 0px 15px 0px" }} />
            </div>
            <button onClick={handleClick} type="cancelHiredServices">CANCELAR</button>
            <button style={{ backgroundColor: "#13C081", color: 'white' }} onClick={handleClick} type="hireServices">SALVAR</button>
        </div>
    );
}

export default withRouter(HireServices)