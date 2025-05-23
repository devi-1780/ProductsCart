// src/components/__tests__/Header.test.js
import React from "react";
import { act } from "react-dom/test-utils";
import { fireEvent, render, screen } from "@testing-library/react";
import AboutProdcut from "../AboutProduct";
import LogoSection from "../LogoSection";
import { describe, it, expect } from "vitest";
import appStore from "../../slices/appStore";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom/vitest";
import MOCK_DATA from "../../mocks/mockProductListData.json";
import { vi } from "vitest";
global.fetch = vi.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
);

describe("cart component", () => {
  it("should render AboutProduct component", async () => {
    render(
      <Provider store={appStore}>
        <BrowserRouter>
          <LogoSection />
          <AboutProdcut />
        </BrowserRouter>
      </Provider>
    );
    screen.debug();
    const addBtn = await screen.findByRole("button", { name: "Add to cart" });
    expect(addBtn).toBeInTheDocument();
    const cartBtn = screen.getAllByRole("button", { name: "View cart 0" });
    expect(cartBtn[0]).toBeInTheDocument();

    fireEvent.click(addBtn);
    const afterCartBtn = screen.getAllByRole("button", { name: "View cart 1" });
    expect(afterCartBtn[0]).toBeInTheDocument();

    fireEvent.click(addBtn);
    const afterCartBtn2 = screen.getAllByRole("button", {
      name: "View cart 2",
    });
    expect(afterCartBtn2[0]).toBeInTheDocument();
  });
});
