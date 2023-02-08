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
export class FormComponent implements OnInit{
  reactiveForm:FormGroup; 
  additionalError:string="Field should not be empty" 
  ngOnInit(): void{
    this.reactiveForm= new FormGroup({
      firstName : new FormControl(null,NameError),
      lastName : new FormControl(null,NameError),
      userName : new FormControl(null,usernameError),
      age : new FormControl(null,ageError),
      email : new FormControl(null,invalidMailFormatError),
      mobileNo : new FormControl(null,noAlphabetsAllowed),
      additional : new FormControl(null,[Validators.required]),
    });
  }

  validateForm(){
    console.log(this.reactiveForm);
  }



}
