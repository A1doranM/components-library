import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import * as Yup from "yup";
import { Formik } from "formik";

import FormField from "components/inputs/FormField";
import Dialog from "../Dialog";
import CommonButton from "components/buttons/CommonButton/CommonButton";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "GOV-UA-UI/Dialog",
  component: Dialog
} as ComponentMeta<typeof Dialog>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Dialog> = (args) => {
  const onFormSubmit = (values: { email: string }) => {
    const fields = {
      email: values.email || null
    };
  };

  const ValidationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required")
  });

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {}

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <CommonButton onClick={openModal} label={"Open Modal"} />
      <Dialog
        {...args}
        isOpen={modalIsOpen}
        onAccept={closeModal}
        onDecline={closeModal}
        child={
          <Formik
            initialValues={{ email: "" }}
            onSubmit={(values, actions) => {
              onFormSubmit(values);
            }}
            validationSchema={ValidationSchema}
            enableReinitialize={true}
            validateOnChange={true}
          >
            {({ errors, touched, values, handleChange }) => (
              <FormField
                type="email"
                name="email"
                value={values["email"]}
                onChange={handleChange}
                placeholder="Email"
                errors={errors}
                touched={touched}
              />
            )}
          </Formik>
        }
      />
    </>
  );
};

export const ChangeEmail = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ChangeEmail.args = {
  title: "Змінити електронну адресу"
};
