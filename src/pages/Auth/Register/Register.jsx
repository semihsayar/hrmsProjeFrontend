import {
  Flex,
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  Alert
} from "@chakra-ui/react";

import { useFormik } from "formik";
import validationSchema from "./Validations";
import React, { useEffect, useState } from "react";
import AuthenticationService from "../../../services/authenticationService";
import {useAuth} from "../../../contexts/AuthContext"

export default function Register() {

  const {login} = useAuth();

  const [authentications, setAuthentications] = useState(null);
  const [registrationError, setRegistrationError] = useState(null);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      passwordConfirm: "",
      identityNumber: "",
    },
    validationSchema,
    onSubmit: async (values, bag) => {
      try {
        // Kullanıcı kaydı işlemini yapmak için servisi kullanabilirsiniz.
        let authenticationService = new AuthenticationService();
        const result = await authenticationService.registerjobseeker(values);

        // Başarılı kayıt sonucunda dönen verileri authentications state'ine atayabilirsiniz.
        setAuthentications(result);

        // Kayıt başarılıysa ek işlemler yapabilirsiniz.

        login(result);

      } catch (errors) {
        // Kayıt sırasında bir hata oluşursa hata durumunu ele alabilirsiniz.
        bag.setErrors({general: errors.response.data.message})
      }
    },
  });

  return (
    <div>
      <Flex align="center" width="full" justifyContent="center">
        <Box pt={10}>
          <Box textAlign="center">
            <Heading>Kayıt Ol</Heading>
          </Box>
          <Box my={5}>
              {
                formik.errors.general && (
                  <Alert status="error">
                      {formik.errors.general}
                  </Alert>
                )
              }
            </Box>  
          <Box my={5}>
            <form onSubmit={formik.handleSubmit}>
              <Flex justifyContent="space-between">
                <FormControl mr={5}>
                  <FormLabel>İsim</FormLabel>
                  <Input
                    name="firstName"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.isim}
                    isInvalid={formik.touched.firstName && formik.errors.firstName}
                  />
                </FormControl>

                <FormControl>
                  <FormLabel>Soyisim</FormLabel>
                  <Input
                    name="lastName"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.soyisim}
                    isInvalid={formik.touched.lastName && formik.errors.lastName}
                  />
                </FormControl>
              </Flex>

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
                    isInvalid={formik.touched.password && formik.errors.password}
                  />
                </FormControl>
              </Flex>

              <Flex justifyContent="space-between">
                <FormControl mr={5}>
                  <FormLabel>Şifre Tekrarı</FormLabel>
                  <Input
                    name="passwordConfirm"
                    type="password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.passwordConfirm}
                    isInvalid={formik.touched.passwordConfirm && formik.errors.passwordConfirm}
                  />
                </FormControl>

                <FormControl>
                  <FormLabel>Tc Kimlik</FormLabel>
                  <Input
                    name="identityNumber"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.identityNumber}
                    isInvalid={formik.touched.identityNumber && formik.errors.identityNumber}
                  />
                </FormControl>
              </Flex>

              <Button mt={4} width="full" type="submit">
                Kayıt Ol
              </Button>
            </form>
          </Box>
        </Box>
      </Flex>
    </div>
  );
}
