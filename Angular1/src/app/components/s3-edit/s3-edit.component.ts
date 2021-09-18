import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { S3 } from 'src/app/s3';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
@Component({
  selector: 'app-s3-edit',
  templateUrl: './s3-edit.component.html',
  styleUrls: ['./s3-edit.component.css']
})
export class S3EditComponent implements OnInit {

  constructor(private dataService: DataService, private router: Router,private route: ActivatedRoute) { }

  public s3 = new S3();
  data: any
  id: number;
  id2: null
  data1:any
  token:any;
  message = ""
  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.getS3();
    
    
  }

  go(cmp) {
    this.router.navigate(['addServer/' + cmp])
  }
  updateCdn(s) {
    console.log(this.s3);
    this.dataService.updateS3(this.id,s).subscribe(res => {
      console.log(res);
      this.data1 = res;
      this.message = this.data1.message
      console.log(this.message)
    });
    this.token = localStorage.getItem('token');
    if(this.token == null){
      this.router.navigate((['/login']))
    }
    
  }

  getS3(){
    this.dataService.getS3ById(this.id).subscribe(res => {
      console.log(res);
      this.data = res;
      this.s3 = this.data
      this.id2 = this.s3.idServer

    });
    console.log(this.id)
  }
  

}
