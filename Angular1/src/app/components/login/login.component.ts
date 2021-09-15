import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
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
  ngOnInit(): void {
    // this.dataService.currentUser.subscribe(user1 => this.user = user1)
  }

  login(){
    // console.log(this.form);
    this.dataService.login(this.form).subscribe(res =>{
      console.log(res);
      this.data = res;
      // error => this.handleError(error);
      // this.newUser();
      if(this.data.status ===1){
        this.token = this.data.data.token;
        localStorage.setItem('token',this.token);
        this.router.navigate((['/dashbored']))
      }else{
        this.router.navigate((['/login']))
      }
    })
    // this.newUser();
    
  }
  handleError(error){
    this.error = error.error.error;
  }
  // newUser(){
  //   this.dataService.changeUser(this.user)
  // }



}
