// Test away!
import React from "react";
import { render } from "@testing-library/react";

import Dashboard from "./Dashboard";

test("Dashboard renders without crashing", () => {
    render(<Dashboard/>);
});