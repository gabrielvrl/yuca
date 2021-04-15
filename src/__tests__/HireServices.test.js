import React from "react";
import { BrowserRouter as Router } from 'react-router-dom'
import { render, fireEvent, waitFor, act } from "@testing-library/react"

import HireServices from '../components/HireServices';

describe("Rendering Home", () => {
    window.history.pushState({}, '', `${'hireservices'}`);
    it("should render cancel button", () => {
        const { queryByTestId } = render(<Router><HireServices /></Router>)
        expect(queryByTestId("cancel-btn")).toBeTruthy()
    })

    it('should click Cancel button and stay on Hire Services page', async () => {
        const { getByTestId } = render(<Router><HireServices /></Router>)
        const button = await waitFor(
            () => getByTestId('cancel-btn')
        )
        act(() => {
            fireEvent.click(button)
        })
        expect(global.window.location.pathname).toEqual('/hireservices')
    });

    it("should render save button", () => {
        const { queryByTestId } = render(<Router><HireServices /></Router>)
        expect(queryByTestId("save-btn")).toBeTruthy()
    })

    it('should click Save button and navigate to the Home component', async () => {
        const { getByTestId } = render(<Router><HireServices /></Router>)
        const button = await waitFor(
            () => getByTestId('save-btn')
        )
        act(() => {
            fireEvent.click(button)
        })
        expect(global.window.location.pathname).toEqual('/')
    });
})