import User from "../User"
import React from 'react';
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"


test("Testing a render Component", () => {
    render(<User />)
    const heading = screen.getByRole("heading")

    // Assertion 
    expect(heading).toBeInTheDocument();
})

test("Should Button is render", () => {
    render(<User />)
    const button = screen.getByText("Submit");

    //Assertion
    expect(button).toBeInTheDocument()
})

test("Should render a input box ", () => {
    render(<User />)
    const inputBoxes = screen.getAllByRole("textbox");

    //Assertion
    expect(inputBoxes.length).toBe(2)
})

test("should render a placeholder", () => {
    render(<User />)
    const placeHolder = screen.getByPlaceholderText("name");
    //Assertion 
    expect(placeHolder).toBeInTheDocument()
})

