import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import CommonButton from "../CommonButton";

import DoneIcon from "../../../../assets/images/icons/done.svg";

describe("CommonButton", () => {
  test("Renders the CommonButton component", () => {
    render(<CommonButton label="" />);
    const button = screen.getByTestId("common-button");
    expect(button).toBeInTheDocument();
    screen.debug();
  });
  test("Renders the CommonButton component with label='test-label'", () => {
    render(<CommonButton label="test-label" />);
    const button = screen.getByTestId("common-button");
    expect(button).toBeInTheDocument();
    expect(button.textContent).toBe("test-label");
    screen.debug();
  });
  test("Renders the CommonButton component with image", () => {
    render(
      <CommonButton label="test-label" image={DoneIcon} alt="done-icon" />
    );
    const button = screen.getByTestId("common-button");
    const image = screen.getByAltText("done-icon") as HTMLImageElement;
    expect(button).toBeInTheDocument();
    expect(image.src).toContain(DoneIcon);
    screen.debug();
  });
  test("Renders the round CommonButton component with image", () => {
    render(
      <CommonButton
        label="test-label"
        image={DoneIcon}
        alt="done-icon"
        round={true}
      />
    );
    const button = screen.getByTestId("common-button");
    const image = screen.getByAltText("done-icon") as HTMLImageElement;
    expect(button).toBeInTheDocument();
    expect(image.src).toContain(DoneIcon);
    screen.debug();
  });
  test("Check CommonButton onClick handler work", async () => {
    const events = userEvent.setup();
    const closeRightSectionSpy = jest.fn();

    render(
      <CommonButton
        label="test-label"
        image={DoneIcon}
        alt="done-icon"
        onClick={closeRightSectionSpy}
      />
    );
    const button = screen.getByTestId("common-button");
    expect(button).toBeInTheDocument();
    await events.click(button);
    expect(closeRightSectionSpy).toHaveBeenCalledTimes(1);
    screen.debug();
  });
  test("Check CommonButton with round={true} onClick handler work", async () => {
    const events = userEvent.setup();
    const closeRightSectionSpy = jest.fn();

    render(
      <CommonButton
        label="test-label"
        image={DoneIcon}
        alt="done-icon"
        round={true}
        onClick={closeRightSectionSpy}
      />
    );
    const button = screen.getByTestId("common-button");
    expect(button).toBeInTheDocument();
    await events.click(button);
    expect(closeRightSectionSpy).toHaveBeenCalledTimes(1);
    screen.debug();
  });
});
