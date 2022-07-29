import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { LoginHomeComponent } from './login-home/login-home.component';
import { AuthGuardGuard } from './auth/auth-guard.guard';
import { AdminAccessGuard } from './admin-access.guard';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { AdminModule } from './admin/admin.module';
const routes: Routes = [
  {
    path: '',
    redirectTo:'home',
    pathMatch:'full'
  },
  {
    path: 'home',
    component:HomeComponent,children:[
      {
        path:'about',component:AboutComponent
      }
    ]

  },
  {
    path:'loginHome',component:LoginHomeComponent,
  },
  // {path:'admin'},
  // {
  //   path:'admin',component:AdminHomeComponent,canActivate:[AdminAccessGuard]
  // },  
  {
    path:'admin',loadChildren:()=>import('./admin/admin.module').then(m=>m.AdminModule),canActivate: [AdminAccessGuard]
  },
  {
    path:'user',loadChildren:()=>import('./user/user.module').then(m=>m.UserModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
