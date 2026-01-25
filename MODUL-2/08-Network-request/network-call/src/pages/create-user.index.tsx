import { Formik, Form, Field, ErrorMessage } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import type { IUser } from "../types/user.type";
import axios from "axios";
import { useNavigate } from "react-router";

const createUserSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().required().min(6),
  username: Yup.string().nullable(),
  age: Yup.number().nullable(),
});

const initialValues = {
  email: "",
  password: "",
  username: null,
  age: null,
};

function CreateUserPage() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const onSubmit = async (payload: Omit<IUser, "objectId" | "avatar_url">) => {
    setIsLoading(true);
    try {
      await axios.post(
        "https://scenicjump-us.backendless.app/api/data/Account",
        payload,
      );

      alert("Success create user");
      navigate("/");
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-10">
      <h1 className="font-bold text-3xl text-neutral-800 mb-8">Create User</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={createUserSchema}
        onSubmit={(value) => {
          onSubmit(value);
        }}
      >
        <Form className="space-y-3">
          <div>
            <label>Email</label>
            <Field
              name="email"
              type="email"
              placeholder="Input email"
              className="w-full border p-2 rounded-md"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-600 text-sm"
            />
          </div>

          <div>
            <label>Password</label>
            <Field
              name="password"
              type="password"
              placeholder="Input password"
              className="w-full border p-2 rounded-md"
            />
            <ErrorMessage
              name="password"
              component="div"
              className="text-red-600 text-sm"
            />
          </div>

          <div>
            <label>Username</label>
            <Field
              name="username"
              type="text"
              placeholder="Input username"
              className="w-full border p-2 rounded-md"
            />
            <ErrorMessage
              name="username"
              component="div"
              className="text-red-600 text-sm"
            />
          </div>

          <div>
            <label>Age</label>
            <Field
              name="age"
              type="number"
              placeholder="Input age"
              className="w-full border p-2 rounded-md"
            />
            <ErrorMessage
              name="age"
              component="div"
              className="text-red-600 text-sm"
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="p-2 rounded-md bg-neutral-900 cursor-pointer text-white w-full disabled:bg-neutral-800 disabled:cursor-not-allowed"
          >
            {isLoading ? "Loading..." : "Submit"}
          </button>
        </Form>
      </Formik>
    </div>
  );
}

export default CreateUserPage;
