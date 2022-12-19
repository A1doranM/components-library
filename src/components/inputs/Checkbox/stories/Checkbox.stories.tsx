// @ts-nocheck

import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Form, Formik } from "formik";

import Checkbox from "components/inputs/Checkbox";
import * as Yup from "yup";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "GOV-UA-UI/Inputs/Checkbox",
  component: Checkbox
} as ComponentMeta<typeof Checkbox>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Checkbox> = (args) => {
  const onFormSubmit = (values: { select_all: "One" | "Two" | "Three" }) => {
    const fields = {
      select_all: values.select_all
    };

    console.log(fields);
  };

  return (
    <Formik
      initialValues={{ select_all: "" }}
      onSubmit={(values, actions) => {
        onFormSubmit(values);
      }}
      enableReinitialize={true}
      validateOnChange={true}
    >
      {({ errors, touched, values, handleChange }) => {
        return (
          <Form>
            <Checkbox
              title="Первое значение"
              name="select_all"
              checked={values["select_all"].includes("One")}
              value="One"
              errors={errors}
              touched={touched}
            />
            <Checkbox
              title="Второе значение"
              name="select_all"
              checked={values["select_all"].includes("Two")}
              value="Two"
              errors={errors}
              touched={touched}
            />
            <Checkbox
              title="Третье значение"
              name="select_all"
              checked={values["select_all"].includes("Three")}
              value="Three"
              errors={errors}
              touched={touched}
            />
            <br />
            <button type="submit">submit</button>
          </Form>
        );
      }}
    </Formik>
  );
};

export const CheckboxDefault = Template.bind({});
CheckboxDefault.args = {};
