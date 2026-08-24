import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { Header } from "./header";

describe("Header", () => {
  it("opens and closes the accessible mobile navigation", async () => {
    const user = userEvent.setup();
    render(<Header />);
    const trigger = screen.getByRole("button", {
      name: "باز کردن منو",
      hidden: true,
    });
    await user.click(trigger);
    const dialog = screen.getByRole("dialog", { name: "منوی اصلی" });
    expect(dialog).toBeInTheDocument();
    expect(dialog.closest("header")).toBeNull();
    expect(screen.getByRole("button", { name: "بستن منو" })).toHaveFocus();
    await user.keyboard("{Escape}");
    expect(
      screen.queryByRole("dialog", { name: "منوی اصلی" }),
    ).not.toBeInTheDocument();
    expect(trigger).toHaveFocus();
  });
});
