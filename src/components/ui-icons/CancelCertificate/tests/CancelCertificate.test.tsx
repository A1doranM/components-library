import React from "react";
import { render, screen } from "@testing-library/react";

import CancelCertificate from "../CancelCertificate";

describe("CancelCertificate", () => {
  test("Renders the CancelCertificate component", () => {
    render(<CancelCertificate />);
    const cancelCertifacateIcon = screen.getByAltText(
      "cancel certificate"
    ) as HTMLImageElement;
    expect(cancelCertifacateIcon.src).toContain("cancel-certificate");
  });
});
