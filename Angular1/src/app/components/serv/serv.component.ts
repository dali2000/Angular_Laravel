import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Server } from 'src/app/server';
import { Router, RouterModule } from '@angular/router';
@Component({
  selector: 'app-serv',
  templateUrl: './serv.component.html',
  styleUrls: ['./serv.component.css']
})
export class ServComponent implements OnInit {
  constructor(private dataService:DataService,private router: Router) { }
 
  server : any;
  data2:any;
  token:any;
  data: any;
  se1 = new Server();


  getServers(){
    this.dataService.getServers().subscribe(res =>{
      this.data2 = res;
      this.server = this.data2.server
      console.log(this.server)
    });
  }

  public server1 = {
    id: null,
    name: null,
    
  };
  add1() {
    
    this.dataService.addServer(this.server1).subscribe(res => {
      this.data = res;
      console.log(this.data.id);
      
    });
    this.server1.id= this.data.id;
    
    this.server.id++;
  }
  id :number;
  ngOnInit(): void {
    this.getServers();
    this.dataService.currentId.subscribe(id =>this.id =id);
    this.token = localStorage.getItem('token');
    if(this.token == null){
      this.router.navigate((['/login']))
    }

  }
  DeleteServer(id){
    this.dataService.deleteServerData(id).subscribe(res =>{
      this.getServers();
    });
  }
  newId(){
    console.log(this.server1.id);
  }

  getEc3ByIdServer(id){
    this.dataService.getEc3ByIdServer(id).subscribe(res =>{
      console.log(res);
    });
  }

}




