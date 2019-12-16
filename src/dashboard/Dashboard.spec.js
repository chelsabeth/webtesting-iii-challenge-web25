// Test away!
import React from "react";
import { render, fireEvent } from "@testing-library/react";

import Dashboard from "./Dashboard";

test("Dashboard renders without crashing", () => {
    render(<Dashboard/>);
});

test("gates defaults are unlocked and open", () => {
    const dashboard = render(<Dashboard/>);

    const lockGate = dashboard.getByText(/lock gate/i);
    const openBtn = dashboard.getByText(/close gate/i);

    expect(lockGate.disabled).toBe(true);
    expect(openBtn.disabled).toBe(false);
});

test("gate opens", () => {
    const { getByText, findByText } = render(<Dashboard/>);
    fireEvent.click(getByText("Close Gate"));
    findByText(/open gate/i);
});

test("gate cannot be closed or open if it is locked", () => {
    const dashboard = render(<Dashboard/>);

    // test all these conditions when the gate is locked
    // gate can only be unlocked 
    const closeBtn = dashboard.getByText(/close gate/i);
    fireEvent.click(closeBtn);

    const lockBtn = dashboard.getByText(/lock gate/i);
    fireEvent.click(lockBtn);

    const openBtn = dashboard.getByText(/open gate/i);
    fireEvent.click(openBtn);
})
