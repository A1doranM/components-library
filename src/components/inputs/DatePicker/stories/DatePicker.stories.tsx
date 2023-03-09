// @ts-nocheck

import { ComponentMeta, ComponentStory } from "@storybook/react";

import DatePicker from "components/inputs/DatePicker";
import { Form, FormikProvider, useFormik } from "formik";
import { addDays, subDays } from "date-fns";
import React from "react";

export default {
  title: "GOV-UA-UI/Inputs/DatePicker",
  component: DatePicker
} as ComponentMeta<typeof DatePicker>;

const Template: ComponentStory<typeof Select> = (args) => {
  if (args.withFormik) {
    const onFormSubmit = (values: { date: string }) => {
      const fields = {
        date: values.date || null
      };
    };

    const handleFormValidation = (values: { date: string }) => {
      const errors = {};

      if (!values.date) {
        errors.date = "Required";
      }

      console.log("Error: ", errors);

      return errors;
    };

    const formik = useFormik({
      initialValues: {
        date: ""
      },
      validateOnChange: true,
      enableReinitialize: true,
      onSubmit: onFormSubmit,
      validate: handleFormValidation
    });

    return (
      <FormikProvider value={formik}>
        <Form>
          <DatePicker {...args} name="date" />
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
  } else {
    return <DatePicker {...args} />;
  }
};

export const DefaultDatePicker = Template.bind({});
DefaultDatePicker.args = {
  onChange: (date: Date): void => {
  },
  placeholder: "Pick date",
  highlightDates: [subDays(new Date(), 7), addDays(new Date(), 7)],
  excludeDates: [new Date(), subDays(new Date(), -5)],
  initialDate: new Date()

};

export const DatePickerWithValidation = Template.bind({});
DatePickerWithValidation.args = {
  onChange: (date: Date): void => {
  },
  placeholder: "Pick date",
  withFormik: true
};
