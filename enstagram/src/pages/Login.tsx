import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import AuthLayout from "../components/shared/auth-layout";
import { ErrorMessage, Formik } from "formik";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { LoginSchema } from "../schemas/auth";
import { useLogin } from "../api/auth.api";

function Login() {
  const { mutate, isPending } = useLogin();

  return (
    <AuthLayout>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={LoginSchema}
        onSubmit={(values) => {
          mutate(values);
        }}
      >
        {({ values, handleChange, handleBlur, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Card className="md:w-md w-full">
              <CardHeader className="border-b">
                <CardTitle>Login</CardTitle>
                <CardDescription>Login your account</CardDescription>
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
                  {isPending ? "Loading..." : "Login"}
                </Button>
              </CardFooter>
            </Card>
          </form>
        )}
      </Formik>
    </AuthLayout>
  );
}

export default Login;
