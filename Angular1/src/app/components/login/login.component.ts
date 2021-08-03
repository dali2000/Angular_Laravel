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
  ngOnInit(): void {
  }

  login(){
    // console.log(this.form);
    this.dataService.login(this.form).subscribe(res =>{
      console.log(res);
      error => this.handleError(error);
    })
  }
  handleError(error){
    this.error = error.error.error;
  }

}
