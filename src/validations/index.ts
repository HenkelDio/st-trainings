import * as yup from "yup";

export const createWorkplaceValidation = yup.object().shape({
  name: yup.string().required("Nome é um campo obrigatório"),
  cnpj: yup.string().required("CNPJ é um campo obrigatório"),
  contact: yup.string().required("Nome do contato é um campo obrigatório"),
  email: yup.string().required("E-mail é um campo obrigatório"),
  phone: yup.string().required("Telefone é um campo obrigatório"),
})