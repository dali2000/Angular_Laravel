import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user:any;
  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.getUserData();
  }

  getUserData(){
    this.dataService.getDataUser().subscribe(res =>{
      this.user = res;
    });
  }

  deleteData(id){
    this.dataService.deleteUserData(id).subscribe(res =>{
      this.getUserData();
    })
  }
}
