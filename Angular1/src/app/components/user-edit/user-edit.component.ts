import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/user';
@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  id: any;
  data: any;
  message = "";
  user1 = new User();
  constructor(private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit(): void {
    // console.log(this.route.snapshot.params.id);
    this.id = this.route.snapshot.params.id;
    this.getUserData();
  }
  getUserData() {
    this.dataService.getUserById(this.id).subscribe(res => {
      // console.log(res);
      this.data = res;
      this.user1 = this.data;
    })
  }
  updateUser() {
    this.dataService.updateUser(this.id, this.user1).subscribe(res => {
        this.data = res;
        this.message = this.data.message
        console.log(this.message)
    });
  }

}
