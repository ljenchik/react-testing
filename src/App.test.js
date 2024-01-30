/** @jest-environment jsdom */
import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { App } from "./App";

/**
 * Verify something should render
 */
test("App should render", () => {
    render(<App />);
    expect(screen.getByText("Welcome, party people!")).toBeInTheDocument();
});

test("Button should render", () => {
    render(<App />);
    const one_button = screen.getAllByRole("button")[0];
    expect(one_button).toBeInTheDocument();
});

test("theme button should update button text", () => {
    render(<App />);
    const one_button = screen.getAllByRole("button")[0];
    fireEvent.click(one_button);
    expect(screen.getByText("Current theme: dark")).toBeInTheDocument();
});

test("theme button should toggle styles", () => {
    render(<App />);
    const one_button = screen.getAllByRole("button")[0];
    fireEvent.click(one_button);
    const element = window.document.body;
    expect(element).toHaveStyle("color: #FFF");
});

/**
 * Verify clicking button should toggle hidden content
 *
 * hint: you can check if something does not exist by using .not
 * e.g. expect(element).not.toBeInTheDocument()
 *
 * hint: use `queryByText` instead of `getByText` to check if something is _not_ rendered
 * (getByText will throw an error if it is not rendered)
 */
test("hidden button should toggle hidden content", () => {
    render(<App />);
    const one_button = screen.getAllByRole("button")[1];
    const element = screen.queryByText("this content is hidden by default");
    expect(element).not.toBeInTheDocument();
});

/**
 * Want more? Try these:
 *   - check for the presence of a specific element, like the paragraph containing the text "Click the button to toggle the theme"
 *   - check the for the class name .container on the surrounding div
 *   - after clicking the toggle hidden content button, check for the button text to update to "hide" instead of "show"
 */
