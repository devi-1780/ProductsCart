// src/components/__tests__/Header.test.js
import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "../Header"; // Adjust the import path as necessary
import { describe, it, expect } from "vitest";
import appStore from "../../slices/appStore";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom/vitest";

describe("Header component", () => {
  it("should render Header component", () => {
    render(
      <Provider store={appStore}>
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      </Provider>
    );
    // screen.debug();
    const text = screen.getByText(/Shop now/i);
    expect(text).toBeInTheDocument();
  });

  it("should render sign out button", () => {
    render(
      <Provider store={appStore}>
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      </Provider>
    );
    const button = screen.getAllByText(/Login/i);
    console.log(button[0]);
    console.log(button.length);
    expect(button[0]).toBeInTheDocument();
  });
});
