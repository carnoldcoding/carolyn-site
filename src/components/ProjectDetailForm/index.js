import React from 'react'
import { FormContainer } from './ProjectDetailStyles'

const ProjectDetailForm = () => {
  return (
      <>
          <FormContainer>
            <header>
               <div class="form-image">SSDC</div> 
                <div class="form-details-wrapper">
                    <h1>Project Details Form</h1>
                    <p>Please fill out the information form below and hit "submit" to send these details to Carolyn personally</p>
                </div>
            </header>
          </FormContainer>
      </>
  )
}

export default ProjectDetailForm
