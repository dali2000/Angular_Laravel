import { not } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { User } from 'src/app/user';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-inscri',
  templateUrl: './inscri.component.html',
  styleUrls: ['./inscri.component.css']
})
export class InscriComponent implements OnInit {

  constructor(private dataService:DataService,private router: Router) { }
  public form = {
    email:null,
    password:null,
    role:null,
    first_name:null,
    last_name:null 
    
  }
  public message =""
  public messageAlert=""
  public data: any;
  token:any;
  ngOnInit(): void {
    if(this.messageAlert!=""){
      this.messageAlert=""
    }
    this.token = localStorage.getItem('token');
    if(this.token == null){
      this.router.navigate((['/login']))
    }
  }

  add(){
   console.log(this.form)
    this.dataService.submit(this.form).subscribe(res =>{
      console.log(res);
      this.data = res;
      this.message = this.data.message;


    });



    
  }


}
