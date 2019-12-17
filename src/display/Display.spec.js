// Test away!
import React from "react";
import { render } from "@testing-library/react";

import Display from "./Display";

test("Display renders without crashing", () => {
    render(<Display/>);
});

test("display shows green when unlocked or open", () => {
    const display = render(<Display closed={false} locked={false} />);
    const locked = display.getByText(/unlocked/i);
    const opened = display.getByText(/open/i);

    expect(locked.className).toBe("led green-led");
    expect(opened.className).toBe("led green-led");
});