import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from 'src/app/services/apiservices/api.service';

@Component({
  selector: 'app-classics',
  templateUrl: './classics.component.html',
  styleUrls: ['./classics.component.scss']
})
export class ClassicsComponent implements OnInit {
  c_book:any=[];
  token=localStorage.getItem('token')
  constructor(config: NgbModalConfig, private modalService: NgbModal,private apiservice:ApiService) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
  }

  open(content) {
    this.modalService.open(content);
  }
  
  ngOnInit(): void {
    this.c_books();
  }

  c_books(){
    console.log("classics")
    let headers = { 'Content-Type': 'application/JSON', "Authorization": "Bearer " + this.token };
    this.apiservice.get('http://192.168.0.114/training_api/api/web/v1/book/selectcategory?id=3', { headers, responseType: 'json' })
      .subscribe((res: any) => {
        this.c_book = res.data
        console.log(res)
      },err=>{
        console.log(err)
      });
  }
}
