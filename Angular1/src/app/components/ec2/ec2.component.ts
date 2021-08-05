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
    ServerName:"",
    Type: null,
    Storage: 1000,
    Firwall: null,
    Machine: null
  };
  public message =""
  public data : any;
  add1() {

    this.dataService.addServer(this.server).subscribe(res => {
      this.data = res;
      console.log(this.data.server.id);
      this.ec2form.idServer = this.data.server.id;
      this.message = this.data.message;
    });
    if(this.server.name==null){
      this.message ='plz add a server name'
    }
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
  public check =true
  public toggle(){
    if(this.check==true){
      this.check=false
    }
    else{
      this.check=true
    }
    
  }
}
