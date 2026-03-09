import * as Yup from "yup";

const RegisterSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required(),
  username: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required(),
  password: Yup.string().min(6, "Too Short!").required(),
});

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required(),
  password: Yup.string().min(6, "Too Short!").required(),
});

export { RegisterSchema, LoginSchema };
