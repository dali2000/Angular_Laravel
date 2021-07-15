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
  user:any;
  user1 = new User();
  ngOnInit(): void {
  }
  add(){
    this.dataService.submit(this.user1).subscribe(res =>{
      console.log(res);
    })
  }

}
