import { Field, Form, Formik, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import * as Yup from "yup";
import s from "./RegistrationForm.module.css";

// Валідація форми
const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const RegisterForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (values, options) => {
    dispatch(register(values))
      .unwrap()
      .then((res) => {
        toast.success(`Welcome ${res?.user?.name}`);
        navigate("/contacts"); // Перенаправлення після успішної реєстрації
      })
      .catch((error) => {
        const errorMessage =
          error?.response?.data?.message ||
          "Друже, ти не правий! Спробуй ще раз";
        toast.error(errorMessage);
      });
    options.resetForm();
  };

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  return (
    <div className={s.container}>
      <h2>Register</h2>
      <Formik
        onSubmit={handleSubmit}
        initialValues={initialValues}
        validationSchema={validationSchema}
      >
        {({ isSubmitting }) => (
          <Form>
            <div>
              <Field name="name" placeholder="Enter name" />
              <ErrorMessage name="name" component="div" className="error" />
            </div>
            <div>
              <Field name="email" placeholder="Enter email" />
              <ErrorMessage name="email" component="div" className="error" />
            </div>
            <div>
              <Field
                name="password"
                type="password"
                placeholder="Enter password"
              />
              <ErrorMessage name="password" component="div" className="error" />
            </div>
            <button className={s.delete} type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegisterForm;
