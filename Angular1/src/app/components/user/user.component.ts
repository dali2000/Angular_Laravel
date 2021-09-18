import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router, RouterModule } from '@angular/router';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: any;
  token: any;
  role = "all"
  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
    this.getUserData();
    this.token = localStorage.getItem('token');
    if (this.token == null) {
      this.router.navigate((['/login']))
    }
  }

  getUserData() {
    this.dataService.getDataUser().subscribe(res => {
      this.user = res;
    });
  }

  deleteData(id) {
    this.dataService.deleteUserData(id).subscribe(res => {
      this.getUserData();
    });
  }

  first_name = ""
  Search() {
    if (this.first_name == "") {
      
    }
    else {
      this.user = this.user.filter(res => {
        return res.first_name.toLocaleLowerCase().match(this.first_name.toLowerCase());
      })
    }
    


  }
  user1:any
  SearchRole(){
    
    if (this.role == "all") {
      this.ngOnInit()
      this.user1 = this.user
      
    } else if(this.role == "admin") {
      this.user1 = this.user;
      this.user = this.user.filter(res => {
        return res.role.match("admin");
      })
      
    }
    else{
      this.user = this.user1
        this.user = this.user.filter(res => {
          return res.role.match("user");
        })

      
    }
  }
}
