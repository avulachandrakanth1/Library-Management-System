import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserhomeComponent } from './userhome/userhome.component';
import { HeaderComponent } from './header/header.component';
import { BooksComponent } from './books/books.component';
import { MylistComponent } from './mylist/mylist.component';


@NgModule({
  declarations: [UserhomeComponent, HeaderComponent, BooksComponent, MylistComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
