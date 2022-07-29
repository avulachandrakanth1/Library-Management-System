import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from 'src/app/services/apiservices/api.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: any = []
  newUser: any = {
    address: '',
    dob: '',
    id: '',
    password: '',
    pho_no: '',
    user_email: '',
    user_name:'',
  }
  status: string;


  constructor(config: NgbModalConfig, private modalService: NgbModal, private apiservice: ApiService,private router:Router) {
    // customize default values of modals used by this component tree

  }
  token: string =localStorage.getItem('token'); 
  open(content) {
    this.modalService.open(content);
  }
  update(content,user_detail){
    this.modalService.open(content);
    this.newUser=user_detail
  }


  ngOnInit(): void {
    console.log(localStorage.getItem("token works" + 'token'));
    this.getUser()
    this.deleteUser
  }
  getUser() {
    let headers = { 'Content-Type': 'application/JSON', "Authorization": "Bearer " + this.token };
    this.apiservice.get('http://192.168.0.114/training_api/api/web/v1/book/selectuser', { headers, responseType: 'json' })
      .subscribe((res: any) => {
        this.users = res.data
        console.log(res)
      },err=>{
        console.log(err)
      });

  }

  // Add User
  addUser() {
    console.log(this.newUser)
    let headers = { 'Content-Type': 'application/JSON', "Authorization": "Bearer " + this.token };
    this.apiservice.add('http://192.168.0.114/training_api/api/web/v1/book/adduser',this.newUser,{ headers, responseType: 'json' })
    .subscribe((res: any) => {
      this.users = res.data
      console.log(res)
    })
    alert('New User is added successfully !')
    this.getUser();

  }

  //Update User

  updateUser(){
    let headers = { 'Content-Type': 'application/JSON', "Authorization": "Bearer " + this.token };
    this.apiservice.add('http://192.168.0.114/training_api/api/web/v1/book/updateuser',this.newUser,{ headers, responseType: 'json' })
    .subscribe((res: any) => {
      this.users = res.data
      console.log(res)
    })
    this.getUser();
  }

  //Delete User
  deleteUser(pho_no){
    let headers = { 'Content-Type': 'application/JSON', "Authorization": "Bearer " + this.token };
    this.apiservice.get('http://192.168.0.114/training_api/api/web/v1/book/disableuser?pho_no='+pho_no,{ headers, responseType: 'json' })
    .subscribe(data => {
      alert ("Are You Sure to delete")
      console.log(data);
    });
    this.getUser();
  }

}