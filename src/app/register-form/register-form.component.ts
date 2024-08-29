import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.css'
})
export class RegisterFormComponent implements OnInit {

  registrationForm!:FormGroup
  constructor(private formBuilder:FormBuilder){

  }
  ngOnInit(): void {
    
  }
  createRegistartionForm(){
    this.registrationForm=this.formBuilder.group({
      userName:[''],
      emailAddress:[''],
      passWord:[''],
      reTypePassword:['']



    })
  }

}
