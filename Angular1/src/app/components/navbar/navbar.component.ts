import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private dataService: DataService) { }
  public server = {
    id : 1,
    name : 'Server'
  };
  ngOnInit(): void {
  }

  // add1(){
    
  //   this.dataService.addServer(this.server.name+this.server.id).subscribe(res =>{
  //     console.log(res);
  //   });
  //   console.log(this.server.name+this.server.id);
  //   this.server.id ++;
  // }
}
