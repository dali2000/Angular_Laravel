import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Server } from 'src/app/server';
import { Router, RouterModule } from '@angular/router';
import jwtDecode from 'jwt-decode';
@Component({
  selector: 'app-serv',
  templateUrl: './serv.component.html',
  styleUrls: ['./serv.component.css']
})
export class ServComponent implements OnInit {
  constructor(private dataService:DataService,private router: Router) { }
  ngOnInit(): void {
    // this.getServers();

    this.dataService.currentId.subscribe(id =>this.id =id);
    this.token = localStorage.getItem('token');
    this.user = jwtDecode(this.token);
    this.get();


    
    if(this.token == null){
      this.router.navigate((['/login']))
    }
  }
  role = ""
  user : any;
  user1 : any;
  message = ""
  get(){
    this.dataService.getUserById(this.user.user_id).subscribe(res => {
      this.user1 = res;
      this.role = this.user1.role
      console.log(this.role)
      if(this.role == "admin"){
        this.getServers()

      }
      else{
        this.getServersByUser()
        
      }
    });
  }
  getServersByUser(){
   

    this.dataService.getServersByUser(this.user.user_id).subscribe(res => {
      this.data3 = res
     this.server = this.data3.server
     if(this.server ==""){
       this.message = "you dont have any server"
     }
      
    })
  }
  server : any;
  data2:any;
  token:any;
  data: any;
  se1 = new Server();
  data3 : any
  servers1 : any

  getServers(){
    this.dataService.getServers().subscribe(res =>{
      this.data2 = res;
      this.server = this.data2.server
      console.log(this.server)
    });
  }

  getServers2(){
    
    console.log(this.role)
    if(this.role == "user"){
      
      console.log(this.getServersByUser())
    }
    else if(this.role == "admin"){
      console.log(this.getServers())
    }
  }

  public server1 = {
    id: null,
    name: null,
    
  };
  add1() {
    
    this.dataService.addServer(this.server1).subscribe(res => {
      this.data = res;
    
      
    });
    this.server1.id= this.data.id;
    
    this.server.id++;
  }
  id :number;

  DeleteServer(id){
    this.dataService.deleteServerData(id).subscribe(res =>{
      if(this.role == "user"){
      
        this.getServersByUser();
      }
      else if(this.role == "admin"){
        this.getServers();
      }
    });
  }
  newId(){
    console.log(this.server1.id);
  }

  getEc3ByIdServer(id){
    this.dataService.getEc3ByIdServer(id).subscribe(res =>{
      
    });
  }

  name = ""

  Search(){
    if(this.name == ""){
      this.get();
    }
    else{
      this.server = this.server.filter(res => {
        return res.name.toLocaleLowerCase().match(this.name.toLowerCase());
      })
    }
  }

}




