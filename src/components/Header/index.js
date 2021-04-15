import React, { useEffect, useState } from "react";
import { withRouter } from "react-router";

import api from "../../services/api";

import "./Header.css";
import logo from "../../assets/logo.png";

function Header({ history }) {
    const [user, setUser] = useState({ firstName: "Nome", lastName: "SN" });
    useEffect(() => {
        async function loadUser() {
            const response = await api.get("/me", {});
            setUser(response.data.user);
        }
        loadUser();
    }, []);

    function handleOnClick(e) {
        e.preventDefault();
        history.push("/myaccount");
    }

    return (
        <nav>
            <div className="headerDiv">
                <div className="imgDiv" onClick={() => history.push("/")}>
                    <img src={logo} alt="Yuca" />
                </div>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                    }}
                >
                    <div className="nameCircle" onClick={handleOnClick}>
                        {user.firstName[0] + user.lastName[0]}
                    </div>
                    <h1 onClick={handleOnClick}>
                        {user.firstName.toUpperCase()}
                    </h1>
                </div>
            </div>
        </nav>
    );
}

export default withRouter(Header);
