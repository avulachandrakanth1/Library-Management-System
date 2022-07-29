import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthserviceService } from '../auth/authservice.service';
import { ApiService } from '../services/apiservices/api.service';

@Component({
  selector: 'app-login-home',
  templateUrl: './login-home.component.html',
  styleUrls: ['./login-home.component.scss']
})
export class LoginHomeComponent implements OnInit {
  
  login: any = {
    pho_no:4331217656,
    password:'pree123',
  };
  constructor(private authservice:AuthserviceService,
    private router:Router,
    private apiservice:ApiService,
    private activatedRoute:ActivatedRoute
    ) { }
  
  ngOnInit(): void {
    this.admin   
  }

  admin() {
    let formdata = new FormData;
    formdata.append('pho_no',this.login.pho_no);
    formdata.append('password',this.login.password);
    this.apiservice.post('http://192.168.0.114/training_api/api/web/v1/book/loginpage', formdata)
      .subscribe((res: any) => {
        console.log(res)
        localStorage.setItem('token',res.data.Data.Access_Token);
        localStorage.setItem('role',res.data.Data.Role)
        console.log(localStorage.getItem('role'))

        console.log(localStorage.getItem('token'))
      });
    // localStorage.setItem('token')
    localStorage.setItem('admin',JSON.stringify(this.login))
    console.log(JSON.parse(localStorage.getItem('admin')))
    this.authservice.isLogedIn(localStorage.getItem('token'))
  }
  // user(){
  //   let formdata = new FormData;
  //   formdata.append('pho_no',this.login.pho_no);
  //   formdata.append('password',this.login.password);
  //   this.apiservice.post('http://192.168.0.114/training_api/api/web/v1/book/loginpage', formdata)
  //     .subscribe((res: any) => {
  //       console.log(res)
  //       localStorage.setItem('token',res.data.Data.Access_Token);
  //       console.log(localStorage.getItem('token'))
  //     });
  //     this.authservice.userLogIn(localStorage.getItem('role'))


  // }
}
    
//     //alert(JSON.stringify(this.login))


//     localStorage.setItem("admin",this.login)
//     alert(localStorage.getItem("admin"))


//   }
// }


