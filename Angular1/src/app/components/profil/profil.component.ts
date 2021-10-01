import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  constructor(private dataService: DataService,private router:Router) { }
  user:any;
  user1:any;
  token:any;
  test = true;
  is = false;
  data:any;
  message =""

  ngOnInit(): void {
    this.token = localStorage.getItem('token');
    if(this.token == null){ 
      this.router.navigate((['/login']))
    }
    this.user = jwtDecode(this.token);    
    // console.log(this.token);
    
    this.getdata();
  }
  getdata(){
    this.dataService.getUserById(this.user.user_id).subscribe(res => {
      this.user1 = res;
     
      if(this.user1.role == "admin"){
        this.test = false;
        
      }


      
    })
    
  }


  updateUser() {
    if(this.user1.password==null){
      this.message = "must put your password"
    }else{
      this.dataService.updateUser(this.user1.id, this.user1).subscribe(res => {
        this.data = res;
        this.message = this.data.message
       
        this.toggle();
    });
    }
  }
  val = "Edit"
  icon = "bx bxs-edit"
  btn = "btn btn-outline-primary sub"
  id = ""
  public toggle(){
    if(this.is==true){
      
      this.is=false;
      this.val = "Edit"
      this.icon = "bx bxs-edit"
      this.btn = "btn btn-outline-primary sub"
      this.id = "btnS"
    }
    else{
      this.is=true
      this.val = "Annuler"
      this.icon = "bx bx-x"
      this.btn = "btn btn-outline-primary sub"
      this.id = "btn1"
    }
   
  }
}
