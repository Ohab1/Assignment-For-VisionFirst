import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { funappdatatypedefine } from '../interface.model';
import { DatatransferService } from '../service/datatransfer.service';
import { SharedataService } from '../service/sharedata.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
ngOnDestroy(){
  localStorage.removeItem('username')
}
  addformvalue = new FormGroup({
    Companyname: new FormControl('',[Validators.required,Validators.minLength(5)]),
     Createdby: new FormControl(''),
     
     Companyaddress: new FormControl('',[Validators.required,Validators.minLength(8)]),
     Role: new FormControl(''),
     Status: new FormControl('')
   })
 
 
   constructor(private dataservice:DatatransferService,private sharedata:SharedataService,private route:Router) { 
 
   }
  get namev(){
   return this.addformvalue.get('Companyname')
  }
  get emailv(){
   return this.addformvalue.get('Createdby')
  }
 
  get addressv(){
   return this.addformvalue.get('Companyaddress')
  }
  status='UNAPPROVED'
 
   details: any;
   getusername:any
   roleget:any
   rolegetuser:any
   ngOnInit(): void {
   
  
     this.valueget()
   }
   valueget() {
     this.dataservice.getsrvs().subscribe(res => {
       this.details = res

     })
   }
   data: any
   addformvaluef() {
 
     console.log(this.addformvalue.value);
     
     this.data = this.addformvalue.value
     this.addformvalue.value.Createdby = localStorage.getItem('username')
     this.addformvalue.value.Role='IT_USER_NORMAL'
     this.addformvalue.value.Status='UNAPPROVED'
     this.dataservice.postdata(this.data).subscribe(res => {
       alert("Company Details Successfully Saved")
       this.valueget()
 
     }, eror => {
       alert("If Found Any Issue In This Appliction Then Please Contact Md Ohab")
     })
 
   }
 
  
   funappdatatype:funappdatatypedefine= new funappdatatypedefine
 

  
 

   adddetails=false
   update=false
 add(){
 this.adddetails=true
 this.update=false
 }

 
  b:any
 
 logout(){
  console.log('logout',localStorage.getItem('username'))
localStorage.removeItem('username')

  console.log('logout',localStorage.getItem('username'))
 this.route.navigate(['login'])
 }
 

}
