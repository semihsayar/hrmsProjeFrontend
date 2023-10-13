import * as yup from "yup";

const validations = yup.object().shape({
  firstName: yup.string().required("Zorunlu Alan"),
  lastName: yup.string().required("Zorunlu Alan"),
  email: yup
    .string()
    .email("Geçerli bir email girin.")
    .required("Zorunlu Alan"),
  password: yup
    .string()
    .min(5, "Parolanız en az 5 karakter olmalıdır")
    .required(),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref("password")], "Parolalar uyuşmuyor.")
    .required(),
    identityNumber: yup
    .string()
    .required()
});

export default validations;