import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,FormsModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent implements OnInit {

  loginForm!: FormGroup
  constructor(private formbuilder: FormBuilder) {
this.createLoginForm()
  }
  ngOnInit(): void {

  }
  createLoginForm() {
    this.loginForm = this.formbuilder.group({
      userName: [''],
      password: ['']
    })
  }

  opnenRegisterForm(){
    window.open('')
  }
}
