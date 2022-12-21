import React, { FocusEvent } from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import * as Yup from "yup";
import { Form, Formik } from "formik";

import FormField from "components/inputs/FormField";

interface TestFormInterface {
  name: string;
  errors?: any;
  touched?: any;
  className?: string;
  noBorders?: boolean;
  placeholder?: string;
  errClassName?: string;
  errComponent?: React.ComponentType;
  type?: React.HTMLInputTypeAttribute;
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
}

const TestForm = ({
  name,
  type,
  placeholder,
  noBorders
}: TestFormInterface) => {
  const onFormSubmit = (values: { email: string }) => {
    const fields = {
      email: values.email || null
    };
  };

  const ValidationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required")
  });

  return (
    <Formik
      initialValues={{ email: "" }}
      onSubmit={(values, actions) => {
        onFormSubmit(values);
      }}
      validationSchema={ValidationSchema}
      enableReinitialize={true}
      validateOnChange={true}
    >
      {({ errors, touched }) => (
        <Form>
          <FormField
            type={type}
            name={name}
            placeholder={placeholder}
            noBorders={noBorders}
            errors={errors}
            touched={touched}
          />
          <br />
          <br />
          <br />
          <button type="submit">submit</button>
        </Form>
      )}
    </Formik>
  );
};

describe("FormField", () => {
  test("Renders the FormField component", () => {
    render(<TestForm name="email" placeholder="Email" />);
    const input = screen.getByTestId("input");
    const label = screen.getByText("Email");
    expect(input).toBeInTheDocument();
    expect(label).toBeInTheDocument();
    screen.debug();
  });

  test("Write text into input", async () => {
    const events = userEvent.setup();
    render(<TestForm name="email" placeholder="Email" noBorders={false} />);
    const input = screen.getByTestId("input");
    await events.type(input, "aldoran.ua@gmail.com");
    expect(input).toHaveValue("aldoran.ua@gmail.com");
    screen.debug();
  });

  test("Check input with type password", async () => {
    const events = userEvent.setup();
    render(
      <TestForm
        name="email"
        placeholder="Email"
        type="password"
        noBorders={false}
      />
    );
    const input = screen.getByTestId("input");
    const eyeIcon = screen.getByAltText("eye");
    await events.type(input, "1q2w3e3e2w1q4r");
    expect(input).toHaveAttribute("type", "text");
    await events.click(eyeIcon);
    expect(input).toHaveAttribute("type", "password");
    screen.debug();
  });

  test("Check validation with type password", async () => {
    const events = userEvent.setup();
    render(<TestForm name="email" placeholder="Email" type="password" />);
    const submitBtn = screen.getByText("submit");
    events.click(submitBtn).then(() => {
      const error = screen.getByText("Required");
      expect(error).toBeInTheDocument();
    });
    screen.debug();
  });

  test("Check validation with type text", () => {
    const events = userEvent.setup();
    render(<TestForm name="email" placeholder="Email" type="text" />);
    const submitBtn = screen.getByText("submit");
    events.click(submitBtn).then(() => {
      const error = screen.getByText("Required");
      expect(error).toBeInTheDocument();
    });
    screen.debug();
  });
});
