import React, { useEffect } from 'react';
import { withRouter, useLocation } from 'react-router';

import './Menu.css';

function Menu({ history }){
    let location = useLocation()
    useEffect(()=> {
        async function changeButtonColor(){
            if ('/myaccount' === location.pathname || '/changeaccountinformation' === location.pathname /* && window.screen.width > 500 */){
                let account = document.getElementById("account")
                account.style.color = "#13C081"
                let yuca = document.getElementById("yuca")
                yuca.style.color = "#000000"
            } else {
                let yuca = document.getElementById("yuca")
                yuca.style.color = "#13C081"
                let account = document.getElementById("account")
                account.style.color = "#000000"
            }
        }
        changeButtonColor()
    },[location.pathname])

    useEffect(()=>{
        async function handleMenuDisplay() {
            console.log("")
            if (('/hireservices' === location.pathname || '/changeaccountinformation' === location.pathname || '/myaccount' === location.pathname) && window.screen.width <= 500){
                document.getElementById("ContainerMenu").style.display = "none";
            }
            else {
                document.getElementById("ContainerMenu").style.display = "flex";
            }
        }
        handleMenuDisplay()
    },[location.pathname])
    

    function handleYuca(e){
        e.preventDefault()
        history.push('/')
    }

    function handleConta(e){
        e.preventDefault()
        history.push('/myaccount')
    }

    return(
        <div className="containerMenu" id="ContainerMenu" >
            <div className="options">
                <button id="yuca" onClick={handleYuca}>MEU YUCA</button>
                <button id="account" onClick={handleConta}>MINHA CONTA</button>
            </div>
        </div>
    );
}

export default withRouter(Menu)