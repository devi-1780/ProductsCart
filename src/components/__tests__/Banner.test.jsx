// src/components/__tests__/BannerSection.test.js
import React from "react";
import { render, screen } from "@testing-library/react";
import BannerSection from "../BannerSection"; // Adjust the import path as necessary
import { describe, it, expect } from "vitest";
import appStore from "../../slices/appStore";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom/vitest";

describe("BannerSection component", () => {
  it("should render BannerSection component", () => {
    render(
      <Provider store={appStore}>
        <MemoryRouter>
          <BannerSection />
        </MemoryRouter>
      </Provider>
    );
    // screen.debug();
    const text = screen.getByText(/Selected Products/i);
    expect(text).toBeInTheDocument();
  });

  it("should render Cart button", () => {
    render(
      <Provider store={appStore}>
        <MemoryRouter>
          <BannerSection />
        </MemoryRouter>
      </Provider>
    );
    screen.debug();
    const button = screen.getAllByText(/View cart/i)[0];
    expect(button).toBeInTheDocument();
  });
});
