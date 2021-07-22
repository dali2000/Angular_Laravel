import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router,RouterModule } from '@angular/router';

@Component({
  selector: 'app-ec2',
  templateUrl: './ec2.component.html',
  styleUrls: ['./ec2.component.css']
})
export class Ec2Component implements OnInit {

  constructor(private dataService:DataService,private router:Router) { }
  public ec2form = {
    ServerName:null,
    Type:null,
    Storage:1000,
    Firwall:null,
    Machine:null
  };
  ngOnInit(): void {
  }

  go(cmp){
    this.router.navigate(['addServer/'+cmp])
  }
  add() {
    
    this.dataService.addec2(this.ec2form).subscribe(res =>{
      console.log(res);
    });
    console.log(this.ec2form.Machine);
  }
}
