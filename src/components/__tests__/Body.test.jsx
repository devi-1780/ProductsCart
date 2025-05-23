// src/components/__tests__/Header.test.js
import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Body from "../Body";
import { describe, it, expect } from "vitest";
import appStore from "../../slices/appStore";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { act } from "react-dom/test-utils";
import "@testing-library/jest-dom/vitest";
import { input } from "@testing-library/user-event/dist/cjs/event/input.js";
// import MOCK_DATA from "../../mocks/mockProductListData.json";

describe("Body component", () => {
  it("should render Body component", () => {
    render(
      <Provider store={appStore}>
        <MemoryRouter>
          <Body />
        </MemoryRouter>
      </Provider>
    );
    // screen.debug();
    const text = screen.getByText(/Cart/i);
    expect(text).toBeInTheDocument();
  });

  describe("Search Input", () => {
    it("should update search input value on change", () => {
      render(
        <Provider store={appStore}>
          <MemoryRouter>
            <Body />
          </MemoryRouter>
        </Provider>
      );

      // Get the search input
      const Input = screen.getAllByRole("textbox");
      const searchInput = Input[0];
      // Simulate user typing "jewelery"
      fireEvent.change(searchInput, { target: { value: "jewelery" } });

      // Assert that input value is updated
      expect(searchInput.value).toBe("jewelery");
    });
  });
});
