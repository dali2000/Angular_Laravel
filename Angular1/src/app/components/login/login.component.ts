import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private dataService: DataService ,private router:Router) { }
  public form = {
    email:null,
    password:null
  }
  public error = null;
  data:any;
  token:any;
  message = ""
  user:any;
  user1:any;
  ngOnInit(): void {
    // this.dataService.currentUser.subscribe(user1 => this.user = user1)
  }
alert = ""
icon = ""

  login(){
    // console.log(this.form);
    this.dataService.login(this.form).subscribe(res =>{
      console.log(res);
      this.data = res;
      this.message = this.data.message
      if(this.data.status == 0 ){
        this.alert = "alert alert-danger"
        this.icon = "bx bxs-error"
      }
      else{
        this.alert = "alert alert-success"
        this.icon = "bx bx-check-shield"
      }
      // error => this.handleError(error);
      // this.newUser();
      if(this.data.status ===1){
        this.token = this.data.data.token;
        localStorage.setItem('token',this.token);
        this.token = localStorage.getItem('token');
        this.user = jwtDecode(this.token);
        this.getdata();
        

        
      }else{
        this.router.navigate((['/login']))
      }
    })
    // this.newUser();
    
  }
  handleError(error){
    this.error = error.error.error;
  }


  getdata(){
    this.dataService.getUserById(this.user.user_id).subscribe(res => {
      this.user1 = res;
      console.log(this.user1)

      if(this.user1.role=="admin"){
        this.router.navigate((['/dashbored']))
      }else{
        this.router.navigate((['/profil']))
      }
    })
  }

}
