import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { MylistComponent } from './mylist/mylist.component';
import { UserhomeComponent } from './userhome/userhome.component';

const routes: Routes = [
  {path:'',
redirectTo:'user-home',
pathMatch:'full'},
  {  path:'user-home',component:UserhomeComponent},
  {
    path:'books',component:BooksComponent
  },
  {
    path:'mylist',component:MylistComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
