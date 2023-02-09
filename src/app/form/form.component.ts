import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NameError } from '../custom-validators/name.validator';
import { usernameError } from '../custom-validators/username.validator';
import { noAlphabetsAllowed } from '../custom-validators/mobileno.validator'
import { invalidMailFormatError } from '../custom-validators/email.validator';
import { ageError } from '../custom-validators/age.validator';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent { 
  typeMismatchError:boolean=false;
  addiLabelValue:string='';
  addiValue:string=''
  additionalError:string="Field should not be empty" 
  reactiveForm:FormGroup = new FormGroup({
    firstName : new FormControl(null,NameError),
    lastName : new FormControl(null,NameError),
    userName : new FormControl(null,usernameError),
    age : new FormControl(null,ageError),
    email : new FormControl(null,invalidMailFormatError),
    mobileNo : new FormControl(null,noAlphabetsAllowed),
    additional : new FormControl(null,[Validators.required]),
  });


  validateForm(){
    console.log(this.reactiveForm);
    console.log(this.reactiveForm.get('additional').value)
    if (this.reactiveForm.status==="VALID" &&  !this.typeMismatchError){
      this.addiLabelValue=this.reactiveForm.get('additional').value;
    }

  }
  handleAdditionInput(event){
    console.log(event)
    this.addiValue=event;
  }
  isError(event){
    this.typeMismatchError=event;
  }

}
