import React from "react";
import { render } from "@testing-library/react";

import Dropdown from "./Dropdown";

const item = [
  { id: 1, name: "item 001" },
  { id: 2, name: "item 002" },
];

describe("Dropdown", () => {
  test("renders the Dropdown component", () => {
    render(
      <Dropdown variant="filled" items={item} itemClassName="rounded-sm">
        Dropdown
      </Dropdown>
    );
  });
});
