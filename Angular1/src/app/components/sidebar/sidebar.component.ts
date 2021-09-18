import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private dataService: DataService,private router:Router) { }
  user:any;
  user1:any;
  token:any;
  test = true;
  name = null;
  role = null;
  ngOnInit(): void {
    
    this.token = localStorage.getItem('token');
    this.user = jwtDecode(this.token);
    console.log(this.token);
    console.log(this.user);
    this.getdata();

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

  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/login'])
  }

  getdata(){
    this.dataService.getUserById(this.user.user_id).subscribe(res => {
      this.user1 = res;
      this.name = this.user1.first_name +" " +this.user1.last_name;
      this.role = this.user1.role
      if(this.user1.role == "admin"){
        this.test = false;
        // console.log(this.test)
      }
      // else{
      //   console.log(this.test)
      // }

   
    })
  }

}
