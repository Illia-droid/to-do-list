import React from "react";
import { Formik, Form, useField } from "formik";
import cx from "classnames";
import AddBoxIcon from "@mui/icons-material/AddBox";
import { TASK_SCHEMA } from "../../../utils/validatorSchemas";

import styles from "./TaskForm.module.scss";
const TextField = ({ ...props }) => {
  const [field, meta] = useField(props);
  const classNamesForError = cx(styles.inputForBody, {
    [styles.error]: meta.touched && meta.error,
  });
  return (
    <div>
      <input {...field} {...props} className={classNamesForError} />
      {meta.touched && meta.error ? (
        <div className={styles.errMessage}>{meta.error}</div>
      ) : null}
    </div>
  );
};

const TaskForm = ({ addTask }) => {
  const onSubmit = (values, formikBag) => {
    addTask(values);
    formikBag.resetForm();
  };

  return (
    <Formik
      initialValues={{ body: "" }}
      onSubmit={onSubmit}
      validationSchema={TASK_SCHEMA}>
      <Form className={styles.adderTasksWrapper}>
        <TextField name="body" />
        <button type="submit" className={styles.btnSubmit}>
          {<AddBoxIcon style={{ color: "#49166f" }} />}
        </button>
      </Form>
    </Formik>
  );
};
export default TaskForm;
