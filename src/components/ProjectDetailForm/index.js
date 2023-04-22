import React from 'react'
import { FormContainer } from './ProjectDetailStyles'
import MobileLogo from '../../assets/nav_logo_sharaway_mobile.png';

const ProjectDetailForm = () => {
  return (
      <>
          <FormContainer>
            <header>
               <div class="form-image"><img src={MobileLogo} alt="mobile-logo"/></div> 
                <div class="form-details-wrapper">
                    <h1>Project Details Form</h1>
                    <p>Please fill out the information form below and hit "submit" to send these details to Carolyn personally</p>
                </div>
            </header>
          <form>
             <input type="text" name="fname" value="" placeholder="First Name"/> 
             <input type="text" name="fname" value="" placeholder="Last Name"/> 
          </form>
          </FormContainer>
      </>
  )
}

export default ProjectDetailForm
