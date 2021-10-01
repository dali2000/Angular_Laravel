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
  ec: any;
  id2: null
  token:any;
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
  alert = "alert alert-danger"
  add1() {

    this.dataService.addServer(this.server).subscribe(res => {
      this.data = res;
      console.log(this.data);
      this.message = this.data.message;
      this.ec2form.idServer = this.data.server.id;
      this.ec2form.ServerName = this.server.name;
      if(this.data.status == 1){
        this.alert="alert alert-success"
      }
      else{
        this.alert = "alert alert-danger"
        
      }
    });

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
    this.getEc3();
    console.log(this.id)
    
    this.token = localStorage.getItem('token');
    if(this.token == null){
      this.router.navigate((['/login']))
    }
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
  getEc3() {
    this.dataService.getEc3ById(this.id).subscribe(res => {
      console.log(res);
      this.ec = res;
      this.ec2form = this.ec;
      this.id2 = this.ec2form.idServer
    });
    console.log(this.id);
  }
}
