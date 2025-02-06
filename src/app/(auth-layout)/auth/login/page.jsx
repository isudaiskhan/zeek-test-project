"use client";

import styles from "./styles.module.scss";

import { setAuthUser } from "@/redux/slices/authUser";
import { login } from "@/services/auth";
import { getBusinessProfile } from "@/services/users";
import { useSubmitHandler } from "@/utils/hooks";
import { LoginSchema } from "@/utils/yup-schemas";
import LoginIcon from "@mui/icons-material/Login";
import {
  Button,
  Container,
  FormControlLabel,
  Stack,
  Grid2,
} from "@mui/material";
import { Field, Form, Formik } from "formik";
import { Switch, TextField } from "formik-mui";
import Cookies from "js-cookie";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";

import { projectName } from "theme/theme-config";

const Login = () => {
  // redux
  const dispatch = useDispatch();

  // handler hook
  const { submitHandler } = useSubmitHandler();

  // router
  const router = useRouter();

  const handleLogin = async (values, setSubmitting) => {
    submitHandler({
      loadingMsg: "Logging in...",
      successMsg: "Logged in successfully",
      onSubmit: async () => {
        const { email, password, rememberMe } = values;

        const res = await login(email, password);

        const { token } = res;

        const userData = await getBusinessProfile(token);

        const reduxState = {
          userData,
          token,
        };

        // set token
        Cookies.set("token", token);
        if (rememberMe) {
          localStorage.setItem("token", token);
        }

        dispatch(setAuthUser(reduxState));
        router.push("/");
      },
      onError: () => {
        setSubmitting(false);
      },
    });
  };

  return (
    <div className={`${styles[`login-page`]} bg-gray-100 dark:bg-[#222]`}>
      <Container>
        <Grid2 container>
          <Grid2
            size={{
              xs: 12,
            }}
            className="flex justify-center items-center h-screen"
          >
            <div className="w-full sm:w-[450px] bg-white dark:bg-slate-700 rounded-lg shadow-xl border dark:border-sky-400 border-gray-200 border-solid">
              <div className={`px-6 pt-1 pb-6`}>
                <h3
                  className={`mb-7 text-xl font-medium text-center heading md:text-2xl`}
                >
                  {projectName}
                </h3>
                <Formik
                  initialValues={{
                    email: "",
                    password: "",
                    rememberMe: false,
                  }}
                  onSubmit={(values, { setSubmitting }) => {
                    handleLogin(values, setSubmitting);
                  }}
                  validationSchema={LoginSchema}
                >
                  {({ isSubmitting }) => (
                    <Form>
                      <Stack spacing={3}>
                        <Field
                          margin="dense"
                          component={TextField}
                          name="email"
                          type="email"
                          label="Email"
                          required
                          fullWidth
                          size="small"
                        />
                        <Field
                          margin="dense"
                          component={TextField}
                          name="password"
                          type="password"
                          label="Password"
                          required
                          fullWidth
                          size="small"
                        />
                        <FormControlLabel
                          control={
                            <Field
                              component={Switch}
                              type="checkbox"
                              name="rememberMe"
                            />
                          }
                          label="Remember me"
                        />
                        <Button
                          type="submit"
                          fullWidth
                          variant="contained"
                          loading={isSubmitting}
                          endIcon={<LoginIcon />}
                          disabled={isSubmitting}
                          color="secondary"
                        >
                          Login
                        </Button>
                        <p className="text-sm text-gray-400">
                          Do not have an account?{" "}
                          <Link
                            href="/auth/signup"
                            className="text-blue-500 underline"
                          >
                            Create one
                          </Link>
                        </p>
                      </Stack>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </Grid2>
        </Grid2>
      </Container>
    </div>
  );
};

export default Login;
