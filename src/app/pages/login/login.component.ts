import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

loginForm!: FormGroup
  showModal: boolean = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    
    this.loginForm = new FormGroup({
      email:new FormControl(''),
      password: new FormControl('')
    })
    
  }

  login() {
    const {email,password} =  this.loginForm.value;
    
  }
  onRegister() {
    const model = document.getElementById('login');
    this.showModal = true;
    if(model)
     model.style.display = 'block'
  }

}
