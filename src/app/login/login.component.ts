import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms'
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';
import { SharedataService } from '../service/sharedata.service';
import { DatatransferService } from '../service/datatransfer.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http : HttpClient,private route:Router,private sharedata:SharedataService,private datatrsnfrsrvs:DatatransferService) { }

  ngOnInit(): void {
  }
  
loginForm=new FormGroup({
  Username : new FormControl('',[Validators.required,Validators.minLength(3)]),
  Password : new FormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(20)])
})

get Username(){
  return this.loginForm.get("Username")
}

get password(){
  return this.loginForm.get("Password")
}
logindata:any
loginUser(){
console.log(this.loginForm.value)
this.logindata= this.loginForm.value.Username

  this.sharedata.chngmsg(this.loginForm.value.Username);
  let username = this.loginForm.value.Username;
  if(username){
    localStorage.setItem('username', username);
  }
  
this.http.get<any>('http://localhost:3000/User').subscribe(userData=> {
  const user=userData.find((data:any)=>{
    return data.UserName===this.loginForm.value.Username && data.Password=== this.loginForm.value.Password
  
  })
  if(user){
  if(user.Role==='IT_ADMIN'){
    // alert("login Successfull");
    this.loginForm.reset()
    this.route.navigate(["admin"])
  }else if(user.Role==='IT_USER_NORMAL'){
    // alert("login Successfull");
    this.loginForm.reset()
    this.route.navigate(["user"])

  }
    
  
   
  }
  else{
    alert("User not found!")
  }

},eror=>{
  alert("Please contact to Md. Ohab")
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
}
