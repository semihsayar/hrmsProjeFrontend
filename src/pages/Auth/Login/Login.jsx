import React from "react";
import {
  Flex,
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  Alert,
} from "@chakra-ui/react";
import { useFormik } from "formik";
function Login() {

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },})
  return (
    <div>
      <Flex align="center" width="full" justifyContent="center">
        <Box pt={10}>
          <Box textAlign="center">
            <Heading>Giriş Yap</Heading>
          </Box>
          <Box my={5}>
            <form onSubmit={formik.handleSubmit}>

              <Flex justifyContent="space-between">
                <FormControl mr={5}>
                  <FormLabel>E-mail</FormLabel>
                  <Input
                    name="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    isInvalid={formik.touched.email && formik.errors.email}
                  />
                </FormControl>

                <FormControl>
                  <FormLabel>Şifre</FormLabel>
                  <Input
                    name="password"
                    type="password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                    isInvalid={
                      formik.touched.password && formik.errors.password
                    }
                  />
                </FormControl>
              </Flex>
              <Button mt={4} width="full" type="submit">
                Giriş Yap
              </Button>
            </form>
          </Box>
        </Box>
      </Flex>
    </div>
  );
}

export default Login;
