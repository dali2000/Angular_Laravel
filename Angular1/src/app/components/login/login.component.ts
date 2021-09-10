import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private dataService: DataService) { }
  public form = {
    email:null,
    password:null
  }
  public error = null;
  user:any;
  ngOnInit(): void {
    this.dataService.currentUser.subscribe(user1 => this.user = user1)
  }

  login(){
    // console.log(this.form);
    this.dataService.login(this.form).subscribe(res =>{
      console.log(res);
      this.user = res;
      error => this.handleError(error);
      this.newUser();
    })
    this.newUser();
    
  }
  handleError(error){
    this.error = error.error.error;
  }
  newUser(){
    this.dataService.changeUser(this.user)
  }



}
