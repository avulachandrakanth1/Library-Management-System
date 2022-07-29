import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminAccessGuard } from '../admin-access.guard';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { BookCopiesComponent } from './book-copies/book-copies.component';
import { BooksComponent } from './books/books.component';
import { CategoriesComponent } from './categories/categories.component';
import { ClassicsComponent } from './classics/classics.component';
import { IssuingComponent } from './issuing/issuing.component';

import { SidenavComponent } from './sidenav/sidenav.component';
import { StatsComponent } from './stats/stats.component';
import { TragedyComponent } from './tragedy/tragedy.component';
import { UsersComponent } from './users/users.component';


const routes: Routes = [
  {path:'',
redirectTo:'admin-home',
pathMatch:'full'},
{
  path:'admin-home',component:AdminHomeComponent,canActivate:[AdminAccessGuard]
},
{
    path:'categories',component:CategoriesComponent
  },
  {
    path:'classics:/id',component:ClassicsComponent
  },
  {
    path:'tragedy',component:TragedyComponent
  },
  {
    path:'books',component:BooksComponent
  },
  {
    path:'users',component:UsersComponent
  },
  {
    path:'issue',component:IssuingComponent
  },
  {
    path:'bookcopies',component:BookCopiesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
