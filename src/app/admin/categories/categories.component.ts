import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from 'src/app/services/apiservices/api.service';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
  providers: [NgbModalConfig, NgbModal]

})
export class CategoriesComponent implements OnInit {

  constructor(config: NgbModalConfig, private modalService: NgbModal,
    private apiservice:ApiService,
    private router:Router
    ) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
  }
  category:object=[]
  newCat:any={
    c_name:'',
    c_desc:''
  }
  token=localStorage.getItem('token')

  open(content) {
    this.modalService.open(content);
  }
  update(content,cat_details) {
    this.newCat=cat_details
    this.modalService.open(content);
  }
  ngOnInit(): void {
    console.log(localStorage.getItem("token works" + 'token'));
    this.getCategory()
  }

  // Get category//

  getCategory() {
    let headers = { 'Content-Type': 'application/JSON', "Authorization": "Bearer " + this.token };
    this.apiservice.get('http://192.168.0.114/training_api/api/web/v1/book/selectcategory', { headers, responseType: 'json' })
      .subscribe((res: any) => {
        this.category = res.data
        console.log(res)
      },err=>{
        console.log(err)
      });

  }


  //  Add Category

  
addCategory(){
  console.log(this.newCat)
  let headers = { 'Content-Type': 'application/JSON', "Authorization": "Bearer " + this.token };
  this.apiservice.add('http://192.168.0.114/training_api/api/web/v1/book/addcategory',this.newCat,{ headers, responseType: 'json' })
    .subscribe((res: any) => {
      this.newCat = res.data
      console.log(res)
    },err=>{
      console.log(err)
    });
}
updateCategory(){
  console.log(this.newCat)
  let headers = { 'Content-Type': 'application/JSON', "Authorization": "Bearer " + this.token };
  this.apiservice.add('http://192.168.0.114/training_api/api/web/v1/book/updatecategory',this.newCat,{ headers, responseType: 'json' })
    .subscribe((res: any) => {
      this.newCat = res.data
      console.log(res)
    },err=>{
      console.log(err)
    });
}
view(id){
  this.router.navigateByUrl('/admin/classics:/id');
  // let headers = { 'Content-Type': 'application/JSON', "Authorization": "Bearer " + this.token };
  // this.apiservice.get('http://192.168.0.114/training_api/api/web/v1/book/selectcategory?id=3', { headers, responseType: 'json' })
  //   .subscribe((res: any) => {
  //     this.c_book = res.data
  //     console.log(res)
  //   },err=>{
  //     console.log(err)
  //   });
}


}
