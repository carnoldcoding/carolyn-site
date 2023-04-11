import React from 'react'
import { FormContainer, FormHeader, FormIcon, FormInfo } from "./ProjectDetailStyles"

const ProjectDetailForm = () => {
  return (
      <>
        <FormContainer>
        <FormHeader>
        <FormIcon/>
        <FormInfo>
      <h1>Project Details Form</h1>
      <p>Please fill out the information form below and hit "submit" to send these details to Carolyn personally.</p>
      </FormInfo>
      </FormHeader>
      </FormContainer>
      </>
  )
}

export default ProjectDetailForm
