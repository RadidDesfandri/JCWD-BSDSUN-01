import AuthLayout from "../components/shared/auth-layout";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { ErrorMessage, Formik } from "formik";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { RegisterSchema } from "../schemas/auth";
import { useRegister } from "../api/auth.api";

function Register() {
  const { mutate, isPending } = useRegister();

  return (
    <AuthLayout>
      <Formik
        initialValues={{ email: "", username: "", password: "" }}
        validationSchema={RegisterSchema}
        onSubmit={(values) => {
          mutate(values);
        }}
      >
        {({ values, handleChange, handleBlur, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Card className="md:w-md w-full">
              <CardHeader className="border-b">
                <CardTitle>Register</CardTitle>
                <CardDescription>Register your account</CardDescription>
              </CardHeader>

              <CardContent>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label>Email</Label>
                    <Input
                      type="email"
                      name="email"
                      placeholder="Email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                    />
                    <ErrorMessage
                      name="email"
                      component={"div"}
                      className="text-xs text-destructive"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Username</Label>
                    <Input
                      type="text"
                      name="username"
                      placeholder="Username"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.username}
                    />
                    <ErrorMessage
                      name="username"
                      component={"div"}
                      className="text-xs text-destructive"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Password</Label>
                    <Input
                      type="password"
                      name="password"
                      placeholder="Password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                    />
                    <ErrorMessage
                      name="password"
                      component={"div"}
                      className="text-xs text-destructive"
                    />
                  </div>
                </div>
              </CardContent>

              <CardFooter className="border-t">
                <Button type="submit" className="w-full" disabled={isPending}>
                  {isPending ? "Loading..." : "Register"}
                </Button>
              </CardFooter>
            </Card>
          </form>
        )}
      </Formik>
    </AuthLayout>
  );
}

export default Register;
