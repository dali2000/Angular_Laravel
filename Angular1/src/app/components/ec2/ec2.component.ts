import { Component, OnInit, Input } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router, RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import { Server } from 'src/app/server';

@Component({
  selector: 'app-ec2',
  templateUrl: './ec2.component.html',
  styleUrls: ['./ec2.component.css']
})
export class Ec2Component implements OnInit {

  constructor(private dataService: DataService, private router: Router,private route: ActivatedRoute) { }

  public server = {
    name: null
  }

  public ec2form = {

    idServer:null ,
    ServerName: null,
    Type: null,
    Storage: null,
    Firwall: null,
    Machine: null
  };

  public data : any;
  add1() {

    this.dataService.addServer(this.server).subscribe(res => {
      this.data = res;
      console.log(res);
      this.ec2form.idServer = this.data.id;
    });
    console.log(this.ec2form.idServer);
  }
  


 

  go(cmp) {
    this.router.navigate(['addServer/' + cmp])
  }

  add() {
    console.log(this.ec2form);
    this.dataService.addec2(this.ec2form).subscribe(res => {
      id : res;
    });
    this.newId();
  }







  id :number;
  ngOnInit(): void {
    this.dataService.currentId.subscribe(id =>this.id =id)
  }
  newId(){
    this.dataService.changeId(this.ec2form.idServer);
  }

}
