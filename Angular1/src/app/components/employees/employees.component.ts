import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Employee } from 'src/app/employee';
@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  employees:any;

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.getEmployeesData();
  }

  getEmployeesData(){
    this.dataService.getData().subscribe(res =>{
      this.employees = res;
    });
  }
  deleteData(id){
    this.dataService.deleteData(id).subscribe(res =>{
      this.getEmployeesData();
    })
  }


}
