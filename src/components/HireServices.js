import React, { useEffect, useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import { withRouter } from 'react-router';

import './HireServices.css'

import api from '../services/api'

function HireServices({ history }){
    const [userServices, setUserServices] = useState([])
    useEffect(() => {
        async function loadUser() {
            const response = await api.get('/me', {})
            setUserServices(response.data.services)
        }
        loadUser()
    },[])


    const [servicesOptions, setServicesOptions] = useState([])
    useEffect(() => {
    async function loadServices(){
        const promise = await api.get('/services', {})
        const serializedUserServices = promise.data.map(service => ({ ...service, checked: false }))
        setServicesOptions(serializedUserServices)
    }
    loadServices()
    },[])


    function handleCancel(e){
        e.preventDefault();
    }

    function handleSave(e){
        e.preventDefault();
    }



    const GreenCheckbox = withStyles({
        root: {
                color: "#AAAAAA",
                padding: 0,
                '&$checked': {
                    color: "#13c081",
                },
            },
            checked: Boolean,
    })((props) => <Checkbox color="default" {...props} />);


    const [totalPrice, setTotalPrice] = useState(0)
    function checkChecked({ id }) {
        const serializedServices = servicesOptions.map((service) => {
            if (service.id === id) {
                if(!service.checked === true){
                    setTotalPrice(totalPrice+service.price)
                }
                else{
                    setTotalPrice(totalPrice-service.price)
                }
                return {...service, checked: !service.checked};
            }
            else {
                return service;
            }
        })
        setServicesOptions(serializedServices)
    }


    function optionsCode(){
        return(
            servicesOptions.map((service)=> (
            <div className="servicesOptions" key={service.id}>
                <GreenCheckbox
                    style={{ transform: "scale(1.2)"}}
                    name={service.name} 
                    value={Number(service.price)}
                    checked={service.checked}
                    onChange={() => checkChecked(service)}
                />
                <label id="nameLabel">{service.name}</label>
                <div className="priceLabel">
                    <label>R${service.price}</label>
                </div>
            </div>
        ))
        )
    }

    return(
        <div className="containerHire">
            <hr />
            <h1>Serviços Contratados</h1>
            <div className="services">
                {optionsCode()}
                <hr id="TotalHR"></hr>
                <div className="totalSelected">
                    <h6 id="totalLabel">Total selecionado</h6>
                    <h6 id="totalNumberLabel">R${totalPrice}</h6>
                </div>
                <div className="finalButtons">
                    <button id="cancelButton" onClick={handleCancel}>CANCELAR</button>
                    <button id="saveButton" onClick={handleSave} type="submit">SALVAR</button>
                </div>
            </div>
        </div>
    );
}

export default withRouter(HireServices)