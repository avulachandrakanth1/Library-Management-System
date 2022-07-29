import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { CategoriesComponent } from './categories/categories.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { StatsComponent } from './stats/stats.component';
import { ClassicsComponent } from './classics/classics.component';
import { TragedyComponent } from './tragedy/tragedy.component';
import { BooksComponent } from './books/books.component';
import { HomeComponent } from './home/home.component';
import { BookComponent } from './book/book.component';
import { UsersComponent } from './users/users.component';
import { IssuingComponent } from './issuing/issuing.component';
import { FormsModule } from '@angular/forms';
import { BookCopiesComponent } from './book-copies/book-copies.component';


@NgModule({
  declarations: [ CategoriesComponent, TransactionsComponent, AdminHomeComponent, HeaderComponent, SidenavComponent, StatsComponent, ClassicsComponent, TragedyComponent, BooksComponent, HomeComponent, BookComponent, UsersComponent, IssuingComponent, BookCopiesComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule
  ]
})
export class AdminModule { }
