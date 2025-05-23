// src/components/__tests__/Header.test.js
import React from "react";
import { render, screen } from "@testing-library/react";
import AboutProdcut from "../AboutProduct";
import { describe, it, expect } from "vitest";
import appStore from "../../slices/appStore";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom/vitest";

describe("Header component", () => {
  it("should render Header component", () => {
    render(
      <Provider store={appStore}>
        <BrowserRouter>
          <AboutProdcut />
        </BrowserRouter>
      </Provider>
    );
    // screen.debug();
    const buttons = screen.getAllByRole("button");
    expect(buttons[0]).toBeInTheDocument();
  });
});
