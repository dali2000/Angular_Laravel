import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
@Component({
  selector: 'app-dashbored',
  templateUrl: './dashbored.component.html',
  styleUrls: ['./dashbored.component.css']
})
export class DashboredComponent implements OnInit {

  constructor(private dataService: DataService) { }
  nb:any;
  nb2:any;
  ngOnInit(): void {
    this.getNbS();
    this.getNbU();
  }
  getNbS(){
    this.dataService.getNbS().subscribe(res =>{
      this.nb = res
      console.log(this.nb)
    });
  }
  getNbU(){
    this.dataService.getNbU().subscribe(res =>{
      this.nb2 = res
      console.log(this.nb)
    });
  }
}
