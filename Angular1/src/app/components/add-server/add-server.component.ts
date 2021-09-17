import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router, RouterModule } from '@angular/router';
@Component({
  selector: 'app-add-server',
  templateUrl: './add-server.component.html',
  styleUrls: ['./add-server.component.css']
})
export class AddServerComponent implements OnInit {

  public server = {
    id: 1,
    name: 'server'
  };
  
  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
    
  }
  go(cmp) {
    this.router.navigate(['addServer/' + cmp])
  }

}
