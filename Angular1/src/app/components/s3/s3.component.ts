import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { S3 } from 'src/app/s3';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-s3',
  templateUrl: './s3.component.html',
  styleUrls: ['./s3.component.css']
})
export class S3Component implements OnInit {

  constructor(private dataService: DataService, private router: Router) { }
  // public s3form = {
  //   serverId: null,
  //   PrivateBucket: null,
  //   PublicBucket: null,
  //   Region: null
  // }
  public s3 = new S3();
  data: any
  id: number;
  token:any;
  ngOnInit(): void {
    this.dataService.currentId.subscribe(id => this.id = id)
    this.data = this.id;
    this.s3.idServer = this.data;
    console.log(this.s3)

    this.token = localStorage.getItem('token');
    if(this.token == null){
      this.router.navigate((['/login']))
    }
  }

  go(cmp) {
    this.router.navigate(['addServer/' + cmp])
  }
  addCdn() {

    this.dataService.addCdn(this.s3).subscribe(res => {
      console.log(res);
      
    });
  }
}
