import React from "react";
import { render } from "@testing-library/react";

import Dialog from "../Dialog";

describe("Dialog", () => {
  test("Renders the Dialog component", () => {
    render(
      <Dialog
        isOpen
        children={undefined}
        onClose={function(
          e: React.MouseEvent<HTMLButtonElement, MouseEvent>
        ): void {
          throw new Error("Function not implemented.");
        }}
      />
    );
  });
});
