import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from 'src/app/services/apiservices/api.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit{
books:any=[];

newBook:any={
  b_name: '',
  author:'',
  cat_id: '',
  description: '',
  id: '',
  img_cover:'', 
};
token:string=localStorage.getItem('token')
  constructor(config: NgbModalConfig, private modalService: NgbModal,private apiservice:ApiService) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
  }

  open(content , book_detail) {
    this.modalService.open(content);
    // console.log(book_detail)
    this.newBook= book_detail
    console.log(this.newBook)
  }
    
  createBook(content){
    this.modalService.open(content);
  }
  openXl(longContent) {
    this.modalService.open(longContent, { size: 'xl' });
  }
  ngOnInit(): void {
    this.getBooks();
    this.deleteBook
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
  //AddBook
  postBook(){
    console.log(this.newBook)
    let headers = { 'Content-Type': 'application/JSON', "Authorization": "Bearer " + this.token };
    this.apiservice.add('http://192.168.0.114/training_api/api/web/v1/book/addbooklist',this.newBook,{ headers, responseType: 'JSON' })
    .subscribe((res: any) => {
      this.newBook = res.data
      console.log(res)
      });
      this.getBooks()
      // alert('New User is added successfully !')
      // window.location.href='../admin/books'

  }

  //UpdateBook

  updateBook(){
    let headers = { 'Content-Type': 'application/JSON', "Authorization": "Bearer " + this.token };
    this.apiservice.add('http://192.168.0.114/training_api/api/web/v1/book/updatebooklist',this.newBook,{ headers, responseType: 'JSON' })
    .subscribe((res: any) => {
      this.newBook = res.data
      console.log(res)
      });
      this.getBooks()
  }

  //DeleteBook
  deleteBook(id){
    let headers = { 'Content-Type': 'application/JSON', "Authorization": "Bearer " + this.token };
    this.apiservice.get('http://192.168.0.114/training_api/api/web/v1/book/disablebooklist?id='+id,{ headers, responseType: 'json' })
    .subscribe(data => {
      // alert ("Are You Sure to delete")
      console.log(data);
      // window.location.href='../admin/books'
      this.getBooks()
    });
  }


}