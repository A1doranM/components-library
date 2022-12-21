import React from "react";
import { render } from "@testing-library/react";

import SimpleUploadFile from "../SimpleUploadFile";

describe("SimpleUploadFile", () => {
  test("Renders the SimpleUploadFile component", () => {
    render(<SimpleUploadFile text="Open me" />);
  });
});
