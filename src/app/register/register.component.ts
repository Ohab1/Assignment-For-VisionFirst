import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DatatransferService } from '../service/datatransfer.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor( private datatransfer:DatatransferService,private router:Router) { }

  ngOnInit(): void {
  }
registerForm= new FormGroup({
  Name:new FormControl('',[Validators.required,Validators.minLength(4)]),
  Email:new FormControl('',[Validators.required,Validators.email,Validators.minLength(3)]),
  Number:new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(12)]),
  Password:new FormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(20)]),
  UserName:new FormControl('',[Validators.required,Validators.minLength(3)]),
  Role:new FormControl('',[Validators.required])
})

get name(){
  return this.registerForm.get('Name')
 }
 get email(){
  return this.registerForm.get('Email')
 }
 get number(){
  return this.registerForm.get('Number')
 }
 get password(){
  return this.registerForm.get('Password')
 }
 get Username(){
  return this.registerForm.get('UserName')
 }
registeruser:any
registerUser(){
  console.log(this.registerForm.value)
this.registeruser=this.registerForm.value
this.datatransfer.userSave(this.registeruser).subscribe((res)=>{
    alert("Congratulations You have been registered Sucessfully")
    this.registerForm.reset()
    this.router.navigate(['login'])
  })
}

pw='password'
 display=true
 fun(){
  this.display =!this.display
  // console.log(this.display)
  if(this.display==true){
    this.pw='password'
  }else if(this.display==false){
    this.pw='text'
  }
 }

 keyPressNumbers(event:any) {
  var charCode = (event.which) ? event.which : event.keyCode;
  // Only Numbers 0-9
  if ((charCode < 48 || charCode > 57)) {
    event.preventDefault();
    return false;
  } else {
    return true;
  }
}

}
