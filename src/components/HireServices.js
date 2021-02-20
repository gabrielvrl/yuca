import React, { useEffect, useState, useLayoutEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import { withRouter } from 'react-router';

import './HireServices.css'

import api from '../services/api'

function HireServices({ history }){
    const [servicesOptions, setServicesOptions] = useState([])
    useEffect(() => {
    async function loadServices(){
        const promise = await api.get('/services', {})
        const serializedUserServices = promise.data.map(service => ({ ...service, checked: false }))
        setServicesOptions(serializedUserServices)
    }
    loadServices()
    },[])

    
    const [userServices, setUserServices] = useState([])


    useEffect(() => {
        async function loadUser() {
            const response = await api.get('/me', {})
            setUserServices(response.data.services)
        }
        loadUser()
    },[])


    function handleCancel(e){
        e.preventDefault();
        servicesOptions.map((service) => {
            service.checked = false
            console.log(service.checked)
        })

    }

    async function handleSave(e){
        e.preventDefault();
        await api.put('/services', {

        })

        history.push('/success')
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

    useEffect(() => {
        setTotalPrice(servicesOptions.reduce((total, {checked, price}) => checked ? total + price : total, 0));
    }, [servicesOptions]);

    function checkChecked({ id }) {
        const serializedServices = servicesOptions.map((service) =>
            service.id === id
            ? ({ ...service, checked: !service.checked })
            : service
        )
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

    useLayoutEffect(() => {
        console.log("entrou no useLayoutEffect")
        function inititalState() {
            servicesOptions.map((service) => {
                userServices.map((userService) => {
                    if (userService.id === service.id){
                        service.checked = true
                        console.log("true")
                    }
                })
            })
        }
        inititalState()
    },[])

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