import { HttpClient } from '@angular/common/http';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { funappdatatypedefine } from '../interface.model';
import { DatatransferService } from '../service/datatransfer.service';



@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit  {
  ngOnDestroy(){
   localStorage.removeItem('username')
  }

  Createdby:any

  addformvalue = new FormGroup({
    Companyname: new FormControl('', [Validators.required, Validators.minLength(5)]),
    Createdby: new FormControl(''),

    Companyaddress: new FormControl('', [Validators.required, Validators.minLength(8)]),
    Role: new FormControl(''),
    Status: new FormControl('')
  })


  constructor(private http: HttpClient, private dataservice: DatatransferService, private route: Router) {
   
  }
 
  get namev() {
    return this.addformvalue.get('Companyname')
  }
  get emailv() {
    return this.addformvalue.get('Createdby')
  }

  get addressv() {
    return this.addformvalue.get('Companyaddress')
  }


  Approve(fndt: any) {
    this.funappdatatype.id = fndt.id

    this.addformvalue.controls['Companyname'].setValue(fndt.Companyname)
    this.addformvalue.controls['Createdby'].setValue(fndt.Createdby)

    this.addformvalue.controls['Companyaddress'].setValue(fndt.Companyaddress)
    this.addformvalue.controls['Role'].setValue(fndt.Role)
    this.addformvalue.controls['Status'].setValue(fndt.Status)


    this.funappdatatype.Companyname = this.addformvalue.value.Companyname
    this.funappdatatype.Createdby = this.addformvalue.value.Createdby

    this.funappdatatype.Companyaddress = this.addformvalue.value.Companyaddress
    this.funappdatatype.Role = this.addformvalue.value.Role
    this.funappdatatype.Status = this.addformvalue.value.Status = 'APPROVED'


    this.dataservice.updateservice(this.funappdatatype, this.funappdatatype.id).subscribe(res => {
      alert("Approved")
      this.valueget()

    })
  }

  addedit = 'Registerde Here Company Details'
  details: any;
  
  datasharegetusername: any

 
  
  
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

    console.log(this.addformvalue.value)
    this.addformvalue.value.Createdby = localStorage.getItem('username');
    console.log(this.datasharegetusername);
    console.log(localStorage.getItem('username'))
    this.addformvalue.value.Role ='IT_ADMIN'
    this.addformvalue.value.Status = 'APPROVED'
    this.data = this.addformvalue.value
    this.dataservice.postdata(this.data).subscribe(res => {
      alert("Company Details Successfully Saved")
      this.valueget()

    }, eror => {
      alert("ohab kuchh toh garbar hai")
    })

  }

  deletedata(data: any) {
    console.log(data)
    this.dataservice.deletepost(data.id).subscribe(res => {
      alert("Deleted sucessfully ")
      this.valueget()
    }, eroe => {
      alert("ohab kuchh toh garbar hai")
    })
  }
  funappdatatype: funappdatatypedefine = new funappdatatypedefine
sts:any
  edit(fndt: any) {


    this.funappdatatype.id = fndt.id
    this.addformvalue.controls['Companyname'].setValue(fndt.Companyname)
    this.addformvalue.controls['Createdby'].setValue(fndt.Createdby)
  
   
    this.sts=fndt
   
    

    

    this.addformvalue.controls['Companyaddress'].setValue(fndt.Companyaddress)


  }


  updateform() {

    this.funappdatatype.Companyname = this.addformvalue.value.Companyname
    this.funappdatatype.Createdby = this.addformvalue.value.Createdby

    this.funappdatatype.Companyaddress = this.addformvalue.value.Companyaddress
this.funappdatatype.Status=this.sts.Status
this.funappdatatype.Role=this.sts.Role
  

    this.dataservice.updateservice(this.funappdatatype, this.funappdatatype.id).subscribe(res => {
      alert("Details successfully updated ")
      this.valueget()

    })

  }
  adddetails = false
  update = false
  create = true
  add() {
    this.adddetails = true
    this.update = false
    this.addedit = 'Registered Here Company Details'
    this.create = false
  }
  editdata() {
    this.adddetails = false
    this.update = true
    this.addedit = 'Edit Here Company Details'
    this.create = true
  }

  b: any


  logout() {
    console.log('Logout',localStorage.getItem('username'))
localStorage.removeItem('username')

    console.log('Logout',localStorage.getItem('username'))
    // this.dataservice.status.next(true)
    this.route.navigate(['login'])
  }

  Delete = false
  Edit = false

}
