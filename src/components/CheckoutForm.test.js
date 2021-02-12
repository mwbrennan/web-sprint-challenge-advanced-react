import React from "react";
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from '@testing-library/user-event';


// Write up the two tests here and make sure they are testing what the title shows //

test("form header renders", () => {
    render(<CheckoutForm />);

    const headerTitle = screen.getByText(/Checkout Form/i);

    expect(headerTitle).toBeInTheDocument();
});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm />);

    const firstNameInput = screen.getByLabelText(/First Name:/i);
    const lastNameInput = screen.getByLabelText(/Last Name:/i);
    const addressInput = screen.getByLabelText(/Address:/i);
    const cityInput = screen.getByLabelText(/City:/i);
    const stateInput = screen.getByLabelText(/State:/i);
    const zipInput = screen.getByLabelText(/Zip:/i);

    userEvent.type(firstNameInput, 'Art');
    userEvent.type(lastNameInput, 'Bell');
    userEvent.type(addressInput, '123 51st street');
    userEvent.type(cityInput, 'Scottsdale');
    userEvent.type(stateInput, 'AZ');
    userEvent.type(zipInput, '29577');

    expect(firstNameInput).toHaveValue('Art');
    expect(stateInput).toHaveValue('AZ');

    const checkOutButton = screen.getByRole('button')
    userEvent.click(checkOutButton);

    const submitMessage = screen.getByText(/You have ordered some plants! Woo-hoo!/i);
    expect(submitMessage).toBeInTheDocument();
});
