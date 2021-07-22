import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-s3',
  templateUrl: './s3.component.html',
  styleUrls: ['./s3.component.css']
})
export class S3Component implements OnInit {

  constructor(private dataService: DataService, private router: Router) { }
  public s3form = {
    PrivateBucket: null,
    PublicBucket: null,
    Region: null
  }
  ngOnInit(): void {
  }
  go(cmp) {
    this.router.navigate(['addServer/'+ cmp])
  }
  add() {
    console.log(this.s3form);
    this.dataService.addS3(this.s3form).subscribe(res =>{
      console.log(res);
    });
  }
}
