import React, { useEffect, useState } from 'react';
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

    useEffect(() => {
        const newOptions = servicesOptions.map((service) => {
            const found = userServices.find(userService => userService.id === service.id);
    
            if (found) {
                service.checked = true
            } 
    
            return service
        });
    
        setServicesOptions(newOptions)
    }, [userServices]);


    function handleCancel(e){
        const newOptions = servicesOptions.map((service) => {
            const found = userServices.find(userService => userService.id === service.id);
        
            return {
               ...service,
               checked: !!found
            } 
         });
        setServicesOptions(newOptions);
    }

    async function handleSave(e){
        e.preventDefault();
        console.log(servicesOptions)
        servicesOptions.map((service) => {
            return api.put('/services',{
                service
            })
        })

        history.push('/success')
    }

    return(
        <div className="containerHire">
            <hr />
            <h1>Serviços Contratados</h1>
            <div className="services">
                {optionsCode()}
                <hr id="TotalHR" />
                <div className="totalSelected">
                    <h6 id="totalLabel">Total selecionado</h6>
                    <h6 id="totalNumberLabel">R${totalPrice}</h6>
                </div>
                <hr id="finalButtonsHR" />
                <div className="finalButtons">
                    <button id="cancelButton" onClick={handleCancel}>CANCELAR</button>
                    <button id="saveButton" onClick={handleSave} type="submit">SALVAR</button>
                </div>
            </div>
        </div>
    );
}

export default withRouter(HireServices)