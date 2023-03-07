// @ts-nocheck

import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Form, FormikProvider, useFormik } from "formik";

import FormField from "components/inputs/FormField";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "GOV-UA-UI/Inputs/FormField",
  component: FormField
} as ComponentMeta<typeof FormField>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof FormField> = (args) => {
  const onFormSubmit = (values: { email: string; password: string }) => {
    const fields = {
      email: values.email || null,
      password: values.password || null
    };
  };

  const handleFormValidation = (values: { email: string }) => {
    const errors = {};

    if (!values.email) {
      errors.email = "Required";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      email: ""
    },
    validateOnChange: true,
    enableReinitialize: true,
    onSubmit: onFormSubmit,
    validate: handleFormValidation
  });

  return (
    <FormikProvider value={formik}>
      <Form>
        <FormField
          type={args.type}
          name="email"
          placeholder={args.placeholder}
          noBorders={args.noBorders}
          // errors={formik.errors}
          // touched={formik.touched}
        />
        <button
          type="submit"
          style={{
            marginTop: "15px"
          }}
        >
          submit
        </button>
      </Form>
    </FormikProvider>
  );
};

export const FormFieldDefault = Template.bind({});
FormFieldDefault.args = {
  type: "email",
  placeholder: "Email"
};

export const FormFieldNoBorders = Template.bind({});
FormFieldNoBorders.args = {
  type: "text",
  placeholder: "Email",
  noBorders: true
};

export const FormFieldPassword = Template.bind({});
FormFieldPassword.args = {
  type: "password",
  placeholder: "Password"
};
