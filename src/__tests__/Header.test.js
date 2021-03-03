import { render } from '@testing-library/react'
import React from 'react'
import { Router } from 'react-router-dom'
import Header from '../components/Header'

it("should render Header component", () => {
    render(
      <Router>
        <Header />
      </Router>
    )
})