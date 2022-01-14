import React from "react";
import MutationObserver from 'mutationobserver-shim';
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {
    render(<CheckoutForm/>);
    //console.log('Renders without errors... is working!');
});

test("shows success message on submit with form details",  async () => {
   
    render(<CheckoutForm/>);

    const firstName = screen.getByLabelText(/First Name:/i);
    userEvent.type(firstName, 'Christwide');
    const lastName = screen.getByLabelText(/Last Name:/i);
    userEvent.type(lastName, 'Christwide');
    const addressName = screen.getByLabelText(/Address:/i);
    userEvent.type(addressName, '123 World Drive');
    const cityName = screen.getByLabelText(/City:/i);
    userEvent.type(cityName, 'Denton');
    const stateName = screen.getByLabelText(/State:/i);
    userEvent.type(stateName, 'Texas');
    const zipName = screen.getByLabelText(/Zip:/i);
    userEvent.type(zipName, '789789');
    
    //Interactions
    const submit = screen.getByRole('button');
    userEvent.click(submit);
    const successMessage = screen.getAllByTestId('successMessage');
    expect(successMessage);

    waitFor(() => {
        const first = screen.queryByTestId('Christwide');
        expect(first).toBeVisible();
        const last = screen.queryByTestId('Oscar');
        expect(last).toBeVisible();
        const address = screen.queryByTestId('123 World Drive');
        expect(last).toBeVisible();
        const city = screen.queryByTestId('Denton');
        expect(city).toBeVisible();
        const state = screen.queryByTestId('Texas');
        expect(state).toBeVisible();
        const zip = screen.queryByTestId('789789');
        expect(zip).toBeVisible();
        const successMessage = screen.queryByTestId('successMessage');
        expect(successMessage).toBeVisible();
        
    });
    console.log('Success Message Test... Working!');
});
