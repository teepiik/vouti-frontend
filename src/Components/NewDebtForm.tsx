import React from 'react'
import styled from 'styled-components'
import { Formik, Form, Field } from 'formik'

interface MyFormValues {
  firstName: string
}

interface Props {
  visibility: boolean
}

export const NewDebtForm: React.FC<Props> = ({ visibility }) => {
  if (visibility === false) return null
  const initialValues: MyFormValues = { firstName: '' }

  return (
    <FormWrapper>
      <FormTitle>Add new debt</FormTitle>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          console.log({ values, actions })
          alert(JSON.stringify(values, null, 2))
          actions.setSubmitting(false)
        }}
        // TODO Render is depricated, need to update
        render={(formikBag) => (
          <Form>
            <Field
              name='firstName'
              render={({ field, form, meta }) => (
                <div>
                  <input type='text' {...field} placeholder='First Name' />
                  {meta.touched && meta.error && meta.error}
                </div>
              )}
            />
          </Form>
        )}
      />
    </FormWrapper>
  )
}

const FormWrapper = styled.div`
  padding: 1rem;
  margin: 0;
`

const FormTitle = styled.h3``
