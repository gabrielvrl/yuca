import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router';

import './HireServices.css'

import api from '../services/api'

function HireServices({ history }){
    const [userServices, setUserServices] = useState([])

    useEffect(() => {
        async function loadUser(){
            const response = await api.get('/me', {})
            setUserServices(response.data.services)
        }
        loadUser()
    },[])

    const [servicesOptions, setServicesOptions] = useState([])

    useEffect(() => {
    async function loadServices(){
        const promise = await api.get('/services', {})
        setServicesOptions(promise.data)
    }
    loadServices()
    },[])


    function handleSave(e){
        e.preventDefault();
    }

    const optionsHTML = servicesOptions.map((service)=> (
        <div className="servicesOptions" key={service.id}>
            <input type="checkbox" name={service.name} value="service.price" />
            <label style={{ marginRight: "42%"}}>{service.name}</label>
            <label style={{ flexDirection: "column"}} >R${service.price}</label>
        </div>
    ))

    return(
        <div className="containerHire">
            <hr />
            <h1>Serviços Contratados</h1>
            <div className="services">
                {optionsHTML}
                <hr style={{ width: 620, height:1, backgroundColor: "#F2F2F2", flexDirection: "column", margin: "22px 0px 15px 0px" }} />
            </div>
            <button>CANCELAR</button>
            <button style={{ backgroundColor: "#13C081", color: 'white' }} onClick={handleSave} type="submit">SALVAR</button>
        </div>
    );
}

export default withRouter(HireServices)