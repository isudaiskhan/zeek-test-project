"use client";
import styles from "./styles.module.scss";

import { signup } from "@/services/auth";
import { useSubmitHandler } from "@/utils/hooks";
import { SignupSchema } from "@/utils/yup-schemas";
import { ArrowForward } from "@mui/icons-material";
import { Button, Container, Grid2, LinearProgress } from "@mui/material";
import { Field, Form, Formik } from "formik";
import { TextField } from "formik-mui";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Signup = () => {
  // router
  const router = useRouter();

  // handler hook
  const { submitHandler } = useSubmitHandler();

  const handleSignup = async (values, setSubmitting) => {
    submitHandler({
      loadingMsg: "Creating account...",
      successMsg: "Account created successfully",
      onSubmit: async () => {
        await signup(values);

        router.push("/auth/login");
      },
      onFinally: () => {
        setSubmitting(false);
      },
    });
  };

  return (
    <div className={`bg-gray-100 ${styles[`signup-page`]} dark:bg-gray-400`}>
      <Container>
        <Grid2 container>
          <Grid2
            item
            size={{
              xs: 12,
            }}
            className="flex justify-center items-center h-screen"
          >
            <div className="w-full sm:w-[450px] bg-white dark:bg-slate-700 rounded-lg shadow-xl border dark:border-sky-400 border-gray-200 border-solid">
              <div className={`px-6 pt-1 pb-2`}>
                <h3
                  className={`mb-7 text-xl font-medium text-center heading md:text-2xl`}
                >
                  Create an account
                </h3>
                <Formik
                  initialValues={{
                    email: "",
                    password: "",
                    firstName: "",
                    lastName: "",
                  }}
                  onSubmit={(values, { setSubmitting }) => {
                    handleSignup(values, setSubmitting);
                  }}
                  validationSchema={SignupSchema}
                >
                  {({ isSubmitting }) => (
                    <Form>
                      <Grid2 container spacing={2}>
                        <Grid2 item size={{ xs: 12 }}>
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
                        </Grid2>
                        <Grid2 item size={{ xs: 12, md: 6 }}>
                          <Field
                            margin="dense"
                            component={TextField}
                            name="firstName"
                            type="text"
                            label="First name"
                            required
                            fullWidth
                            size="small"
                          />
                        </Grid2>
                        <Grid2 item size={{ xs: 12, md: 6 }}>
                          <Field
                            margin="dense"
                            component={TextField}
                            name="lastName"
                            type="text"
                            label="Last name"
                            required
                            fullWidth
                            size="small"
                          />
                        </Grid2>
                        <Grid2 item size={{ xs: 12 }}>
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
                        </Grid2>
                        <Grid2 item size={{ xs: 12 }}>
                          <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            disabled={isSubmitting}
                            endIcon={<ArrowForward />}
                            color="secondary"
                          >
                            Create
                          </Button>
                          <p className="text-sm text-gray-400">
                            Already have an account?{" "}
                            <Link
                              href="/auth/login"
                              className="text-blue-500 underline"
                            >
                              Login
                            </Link>
                          </p>
                        </Grid2>
                        {isSubmitting && (
                          <Grid2 item size={{ xs: 12 }}>
                            <LinearProgress />
                          </Grid2>
                        )}
                      </Grid2>
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

export default Signup;
