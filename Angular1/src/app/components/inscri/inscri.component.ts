import { not } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-inscri',
  templateUrl: './inscri.component.html',
  styleUrls: ['./inscri.component.css']
})
export class InscriComponent implements OnInit {

  constructor(private dataService:DataService) { }
  public form = {
    first_name:null,
    last_name:null,
    email:null,
    password:null
  }

  password :String ="password";
  passwordShown :boolean = false;

  public togglePassword(){
    if(this.passwordShown){
      this.passwordShown = false;
      this.password= "password";
    }else{
      this.passwordShown = true;
      this.password = "password";
    }
  }


  ngOnInit(): void {
  }
  add(){
    this.dataService.submit(this.form).subscribe(res =>{
      console.log(res);
    })
  }
 

}
