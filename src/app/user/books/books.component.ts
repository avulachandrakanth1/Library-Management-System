import { Component, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from 'src/app/services/apiservices/api.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./books.component.scss']
})
export class BooksComponent{
  books:any={};
  token=localStorage.getItem('token');

  constructor(private modalService: NgbModal, private apiservice:ApiService) {}
  openXl(content) {
    this.modalService.open(content, { size: 'xl' });
  }
  getBooks() {
    let headers = { 'Content-Type': 'application/JSON', "Authorization": "Bearer " + this.token };
    this.apiservice.get('http://192.168.0.114/training_api/api/web/v1/book/selectbooklist', { headers, responseType: 'json' })
      .subscribe((res: any) => {
        this.books = res.data
        console.log(res)
      },err=>{
        console.log(err)
      });

  }


}