/* eslint-disable @typescript-eslint/no-explicit-any */
// The below import defines which components come from formik
// import { Field, Form, Formik } from 'formik';

import { FormControl, Grid } from "@chakra-ui/react"
import { ErrorMessage, Field, Form, Formik } from "formik"
import { Input } from "../../components/Input"
import { createWorkplaceValidation } from "../../../validations"
import { BackButton } from "../../components/BackButton"

export function CreateWorkplace() {
  return (
    <>
      <BackButton path="/workplaces"/>
      <h1 className="text-xl font-semibold mb-4">Criar novo estabelecimento</h1>
      <Formik
        initialValues={{}}
        validationSchema={createWorkplaceValidation}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2))
            actions.setSubmitting(false)
          }, 1000)
        }}
      >
        {() => (
          <Form>
            <Field name='name'>
              {({ field, form }: any) => (
                <FormControl isInvalid={form.errors.name && form.touched.name}>
                  <Grid gap={4} w={500}>
                    <div>
                      <Input
                        {...field}
                        name="name"
                        placeholder="Nome do estabelecimento"
                      />
                      <ErrorMessage
                        name="name"
                        component="p"
                        className="text-red-800 text-sm pl-2"
                      />
                    </div>
                    <div>
                      <Input
                        {...field}
                        name="cnpj"
                        placeholder="CNPJ do estabelecimento"
                      />
                      <ErrorMessage
                        name="cnpj"
                        component="p"
                        className="text-red-800 text-sm pl-2"
                      />
                    </div>
                    <div>
                      <Input
                        {...field}
                        name="contact"
                        placeholder="Nome do contato"
                      />
                      <ErrorMessage
                        name="contact"
                        component="p"
                        className="text-red-800 text-sm pl-2"
                      />
                    </div>
                    <div>
                      <Input
                        {...field}
                        name="email"
                        placeholder="Email do estabelecimento"
                      />
                      <ErrorMessage
                        name="email"
                        component="p"
                        className="text-red-800 text-sm pl-2"
                      />
                    </div>
                    <div>
                      <Input
                        {...field}
                        name="phone"
                        placeholder="Telefone do estabelecimento"
                      />
                      <ErrorMessage
                        name="phone"
                        component="p"
                        className="text-red-800 text-sm pl-2"
                      />
                    </div>
                  </Grid>
                </FormControl>
              )}
            </Field>
          </Form>
        )}
      </Formik>
    </>
  )
}