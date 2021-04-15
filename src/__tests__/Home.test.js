import React from "react";
import { BrowserRouter as Router } from 'react-router-dom'
import { render, fireEvent, waitFor, act } from "@testing-library/react"

import Home from '../components/Home';

describe("Rendering Home", () => {
    it("should renders button", () => {
        const { queryByTestId } = render(<Router><Home /></Router>)
        expect(queryByTestId("hire-button")).toBeTruthy()
    })

    it('should click Hire Services button and navigate to the hireservices component', async () => {
        const { getByTestId } = render(<Router><Home /></Router>)
        const button = await waitFor(
            () => getByTestId('hire-button')
        )
        act(() => {
            fireEvent.click(button)
        })
        expect(global.window.location.pathname).toEqual('/hireservices')
    });
})