import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useState } from "react";
import { describe, expect, it } from "vitest";
import { QuantityControl } from "./quantity-control";

function Example() {
  const [value, setValue] = useState(1);
  return <QuantityControl value={value} onChange={setValue} max={2} />;
}

describe("QuantityControl", () => {
  it("respects its limits and exposes an accessible value", async () => {
    const user = userEvent.setup();
    render(<Example />);
    const decrease = screen.getByRole("button", { name: "کاهش تعداد" });
    const increase = screen.getByRole("button", { name: "افزایش تعداد" });
    expect(decrease).toBeDisabled();
    expect(screen.getByRole("status")).toHaveTextContent("1");
    await user.click(increase);
    expect(screen.getByRole("status")).toHaveTextContent("2");
    expect(increase).toBeDisabled();
  });
});
