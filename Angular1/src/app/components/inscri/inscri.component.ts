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
    email:null,
    password:null,
    first_name:null,
    last_name:null

  }
  public error = null;
  public success = null;
  ngOnInit(): void {
  }
  
  add(){
    this.dataService.submit(this.form).subscribe(res =>{
      console.log(res);

      
    });
    console.log(this.form);
  }
  handleError(error){
    this.error = error.error.error;
  }

}
