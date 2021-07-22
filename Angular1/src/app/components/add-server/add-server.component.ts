import { Component, OnInit } from '@angular/core';
import { Router,RouterModule } from '@angular/router';
@Component({
  selector: 'app-add-server',
  templateUrl: './add-server.component.html',
  styleUrls: ['./add-server.component.css']
})
export class AddServerComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  go(cmp){
    this.router.navigate(['addServer/'+cmp])
  }
}
