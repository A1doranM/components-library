// @ts-nocheck

import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Form, Formik } from "formik";
import * as Yup from "yup";

import FormField from "src/components/inputs/FormField";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ReactComponentLibrary/FormField",
  component: FormField
} as ComponentMeta<typeof FormField>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof FormField> = (args) => {
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
            type={args.type}
            name="email"
            placeholder={args.placeholder}
            noBorders={!!args.noBorders}
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
