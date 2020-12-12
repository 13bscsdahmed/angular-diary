import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { FormControlValidationMsgDirective } from '../../shared/directives/formcontrol-validation-msg.directive';
import { FormSubmitValidationMsgDirective } from '../../shared/directives/formsubmit-validation-msg.directive';

import { ValidationMsgService } from '../../shared/services/validation-msg.service';


@NgModule({
  declarations: [
    FormControlValidationMsgDirective,
    FormSubmitValidationMsgDirective,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MDBBootstrapModule,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    FormControlValidationMsgDirective,
    FormSubmitValidationMsgDirective,
    MDBBootstrapModule,
    
  ],
  providers: [
    ValidationMsgService
  ]
})
export class SharedModule { }
