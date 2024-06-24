import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {

  signupform!:FormGroup;

  ngOnInit(){
    this.signupform=new FormGroup({
      username:new FormControl('',[Validators.required]),
      email:new FormControl('',[Validators.required,Validators.minLength(4),Validators.maxLength(10)]),
      password:new FormControl('',[Validators.required,Validators.minLength(4),Validators.maxLength(10)]),
      phone:new FormControl(''),
      gender: new FormControl(''),
      dob:new FormControl('')
    });
  }
  
  signup(){
    console.log(this.signupform.value)
  }


  
  
    
}
