import React from "react";

import App from "./App";

import Header from "./components/Header";
import Menu from './components/Menu';
import Home from './components/Home';
import HireServices from './components/HireServices'

import MyAccount from './components/MyAccount'
import Success from './components/Success'
import ChangeAccountInformation from './components/ChangeAccountInformation'
import PageNotFound from './components/PageNotFound'

import { shallow } from "enzyme";

describe("Rendering components", () => {
  it("Renders App compoent without crashing", () => {
    shallow(<App />)
  });

  it("renders Header component without crashing", () => {
    shallow(<Header />);
  });

  it("renders Menu component without crashing", () => {
    shallow(<Menu />);
  });

  it("renders Home component without crashing", () => {
    shallow(<Home />);
  });

  it("renders HireServices component without crashing", () => {
    shallow(<HireServices />);
  });

  it("renders MyAccount component without crashing", () => {
    shallow(<MyAccount />);
  });

  it("renders Success component without crashing", () => {
    shallow(<Success />);
  });

  it("renders ChangeAccountInformation component without crashing", () => {
    shallow(<ChangeAccountInformation />);
  });

  it("renders PageNotFound component without crashing", () => {
    shallow(<PageNotFound />);
  });
  

})