import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
@Component({
  selector: 'app-s',
  templateUrl: './s.component.html',
  styleUrls: ['./s.component.css']
})
export class SComponent implements OnInit {

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
  }
  go(cmp) {
    this.router.navigate(['addServer/' + cmp])
  }
  add(val) {
    this.dataService.addSqs(val).subscribe(res => {
      console.log(res);
    });

  }
}
