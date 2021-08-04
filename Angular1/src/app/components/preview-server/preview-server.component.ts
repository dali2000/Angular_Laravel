import { Component, OnInit } from '@angular/core';
import { Server } from 'src/app/server';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { Ec2 } from 'src/app/ec2';
@Component({
  selector: 'app-preview-server',
  templateUrl: './preview-server.component.html',
  styleUrls: ['./preview-server.component.css']
})
export class PreviewServerComponent implements OnInit {

  constructor(private dataService:DataService,private route: ActivatedRoute) { }
  server : any;
  ec2: any;
  cdn : any;
  sqs : any;
  s = new Server();
  
  id:any;
  ngOnInit(): void {
    
    this.id = this.route.snapshot.params.id;
    
    
    this.getEc3ByIdServer();
    this.getS3ByIdServer();
    this.getSqsByIdServer();
    this.getServerById();
  }

  getServerById(){
    this.dataService.getServerById(this.id).subscribe(res => {
      this.server = res;
      this.s = this.server;
      console.log(this.s);
    });
  }
  getEc3ByIdServer(){
    this.dataService.getEc3ByIdServer(this.id).subscribe(res =>{
      this.ec2 = res;
      
      console.log(this.ec2)
    });
  }
  getS3ByIdServer(){
    this.dataService.getS3ByIdServer(this.id).subscribe(res => {
      this.cdn = res;
      console.log(this.cdn);
    });
  }
  getSqsByIdServer(){
    this.dataService.getSqsByIdServer(this.id).subscribe(res => {
      this.sqs = res;
      console.log(this.sqs);
    });
  }

}
