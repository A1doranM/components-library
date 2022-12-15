import React from "react";
import { render, screen } from "@testing-library/react";

import Dialog from "../Dialog";

describe("Dialog", () => {
  test("Renders the Dialog component", () => {
    render(
      <Dialog
        title={"dialog"}
        child={undefined}
        onAccept={function (
          e: React.MouseEvent<HTMLButtonElement, MouseEvent>
        ): void {
          throw new Error("Function not implemented.");
        }}
        onDecline={function (
          e: React.MouseEvent<HTMLButtonElement, MouseEvent>
        ): void {
          throw new Error("Function not implemented.");
        }}
        isOpen={false}
      ></Dialog>
    );
  });
});
