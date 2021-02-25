import { render } from '@testing-library/react'
import React from 'react'
import Header from '../components/Header'

it("should render Header component", () => {
    render(
        <Header />,
        document.getElementsByClassName('headerDiv')
    )
})
/* 
describe("Button component", () => {
    test("Matches the snapshot", () => {
      const button = create(<Header />);
      expect(button.toJSON()).toMatchSnapshot();
    });
  }); */
/* 
  ,
  "jest": {
    "moduleNameMapper": {
      "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
      "\\.(css|less|scss|sass)$": "identity-obj-proxy"
    },
    "transform": {
      "^.+\\.[t|j]sx?$": "babel-jest"
    }
  } */

/*   ,
    "babel-jest": "^26.6.3",
    "jest": "^26.6.3",
    "jest-dom": "^4.0.0",
    "react-test-render": "^1.1.2" */