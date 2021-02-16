import React, { useEffect, useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
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
    

    const GreenCheckbox = withStyles({
        root: {
          color: "#AAAAAA",
          '&$checked': {
            color: "#13c081",
          },
        },
        checked: {},
      })((props) => <Checkbox color="default" {...props} />);

    const optionsCode = servicesOptions.map((service)=> (
        <div className="servicesOptions" key={service.id}>
            <GreenCheckbox
                style={{ transform: "scale(1.2)", borderRadius: 4}}
                classes={{root: 'customCheckboxRoot'}}
                name={service.name} 
                value={service.price}
                label={service.name}
            />
            <label id="nameLabel">{service.name}</label>
            <label id="priceLabel">R${service.price}</label>
        </div>
    ))

    return(
        <div className="containerHire">
            <hr />
            <h1>Serviços Contratados</h1>
            <div className="services">
                {optionsCode}
                <hr id="TotalHR"></hr>
            </div>
            <button>CANCELAR</button>
            <button style={{ backgroundColor: "#13C081", color: 'white' }} onClick={handleSave} type="submit">SALVAR</button>
        </div>
    );
}

export default withRouter(HireServices)