import { Field, Form, Formik } from "formik";
import React from "react";

const TaskForm = ({ addTask }) => {
  const onSubmit = (values, formikBag) => {
    addTask(values);
    formikBag.resetForm();
  };
  return (
    <Formik initialValues={{ body: "" }} onSubmit={onSubmit}>
      <Form>
        <Field name="body" />
        <input type="submit" value="add new task" />
      </Form>
    </Formik>
  );
};

export default TaskForm;
