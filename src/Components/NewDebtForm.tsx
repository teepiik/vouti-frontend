import React from 'react'
import styled from 'styled-components'

interface Props {
  visibility: boolean
}

export const NewDebtForm: React.FC<Props> = ({ visibility }) => {
  if (visibility === false) return null

  return <FormWrapper>Add new debt</FormWrapper>
}

const FormWrapper = styled.div`
  padding: 0;
  margin: 0;
`
