import React from "react";
import { Field, Formik, Form } from "formik";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../redux/auth/operations";
import s from "./LoginForm.module.css";

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (values, options) => {
    try {
      const result = await dispatch(login(values)).unwrap();
      options.resetForm();
      navigate("/contacts");
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  const initialValues = {
    email: "",
    password: "",
  };

  return (
    <div className={s.container}>
      <h2>Login</h2>
      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        <Form>
          <div className={s["form-group"]}>
            <Field
              className={s.input}
              name="email"
              type="email"
              placeholder="Enter email"
            />
          </div>
          <div className={s["form-group"]}>
            <Field
              className={s.input}
              name="password"
              type="password"
              placeholder="Enter password"
            />
          </div>
          <button className={s.button} type="submit">
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
