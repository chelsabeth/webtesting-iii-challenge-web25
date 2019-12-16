// Test away!
import React from "react";
import { render } from "@testing-library/react";

import Dashboard from "./Dashboard";

test("Dashboard renders without crashing", () => {
    render(<Dashboard/>);
});

// From Controls.js
test("gates defaults are unlocked and open", () => {
    const dashboard = render(<Dashboard/>);

    const lockBtn = dashboard.getByText(/lock gate/i);
    const openBtn = dashboard.getByText(/close gate/i);

    expect(lockBtn.disabled).toBe(true);
    expect(openBtn.disabled).toBe(false);
});