import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Employee } from 'src/app/employee';

@Component({
  selector: 'app-inscri',
  templateUrl: './inscri.component.html',
  styleUrls: ['./inscri.component.css']
})
export class InscriComponent implements OnInit {

  constructor(private dataService:DataService) { }
  employees:any;
  employee = new Employee();
  ngOnInit(): void {
  }
  submit(){
    this.dataService.submit(this.employee).subscribe(res =>{
      console.log(res);
    })
  }

}
