import React from "react";
import { BrowserRouter as Router } from 'react-router-dom'
import { render, fireEvent } from "@testing-library/react"

import Home from '../components/Home';
/* import HireServices from '../components/HireServices' */

describe("Rendering Home", () => {
    it("renders button", () => {
        const { queryByTestId/* , queryByPlaceholderText */ } = render(<Router><Home /></Router>)
        expect(queryByTestId("hire-button")).toBeTruthy()/* 
        expect(queryByPlaceholderText('CONTRATAR SERVIÇOS')).toBeTruthy() */
    })
})