import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import App from "./App";

describe("App", () => {
  it("should render", () => {
    render(<App />);
    expect(screen.getByLabelText("Artist name:")).toBeInTheDocument();
  });
});
