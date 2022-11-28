import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import FormField from "../FormField";
import { Form, FormikProvider, useFormik } from "formik";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ReactComponentLibrary/FormField",
  component: FormField
} as ComponentMeta<typeof FormField>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof FormField> = (args) => {
  const onFormSubmit = (values: any) => {
    const fields = {
      email: values.email || null
    };
  };

  const formik = useFormik({
    validateOnChange: true,
    initialValues: {
      email: ""
    },
    enableReinitialize: true,
    onSubmit: onFormSubmit
  });

  const handleInputChange = (e: any) => {
    formik.setFieldValue(e.target.name, e.target.value);
  };

  return (
    <FormikProvider value={formik}>
      <Form>
        <FormField
          name="email"
          placeholder="Ваш e-mail"
          value={formik.values["email"]}
          onChange={handleInputChange}
          {...args}
        />
      </Form>
    </FormikProvider>
    // <FormField {...args} />
  );
};

export const FormFieldDefault = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
FormFieldDefault.args = {
  // name: "email",
  // type: "text",
  // placeholder: "asdasd",
  // value: "test email",
  // onChange: (e: any) => {
  //   console.log("SFSFSF");
  // }
};
