import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import Starships from "./containers/Starships";
import Card from "./components/Card";

describe("Starships", () => {

  //it("Starships must return an item that coincide with CR90 corvette", () => {
  // render(<Starships />);
  // expect(screen.getByText("CR90 corvette")).toBeInTheDocument();
  //});

  it("Find order btn with text Crew, Passengers or Reset", () => {
    render(<Starships />);
    const btnEl = screen.getByRole('button', {name: /Crew/},{name: /Passengers/}, {name: /Reset/})
    expect(btnEl).toBeInTheDocument()
  });
  
  it('check if card component has alt atrr with a default value', () => {
    render(<Card />)
    const findElem = screen.getByAltText(/imperial-img/)
  })

  it('pagination buttons have disabled attr and class button-border', () => {
    render(<Starships />)
    const btnDisabled = screen.getByRole('button', {name: /Prev/},{name: /Next/})
    expect(btnDisabled).toHaveClass('button-border');
    expect(btnDisabled).toBeDisabled();
  })  

});
