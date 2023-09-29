import * as Yup from "yup";

export const TASK_SCHEMA = Yup.object({
  body: Yup.string()
    .trim("")
    .min(2, "Body must be at least 2 characters")
    .max(64, "Body must be at most 50 characters")
    .required("Body is required"),
});
