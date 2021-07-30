import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router, RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Ec2 } from 'src/app/ec2';
@Component({
  selector: 'app-ec2-edit',
  templateUrl: './ec2-edit.component.html',
  styleUrls: ['./ec2-edit.component.css']
})
export class Ec2EditComponent implements OnInit {

  constructor(private dataService: DataService, private router: Router,private route: ActivatedRoute) { }

  id:any;
  ec :any;
  id2:null
  public ec2 = new Ec2();

  public ec2form = {
    id:null,
    idServer:null ,
    ServerName: null,
    Type: null,
    Storage: 0,
    Firwall: null,
    Machine: null
  };
  

  ngOnInit(): void {
    // console.log(this.route.snapshot.params.id);
    this.id = this.route.snapshot.params.id;
    this.getEc3();
    
  }
  getEc3(){
    this.dataService.getEc3ByIdServer(this.id).subscribe(res => {
      this.ec = res;
      this.ec2form = this.ec;
      this.id2 = this.ec2form.id;
      console.log(this.ec2form.id);
    });
  }
  
  update(){
    console.log(this.ec2form.id);
    this.dataService.updateEc3(this.ec2form.id,this.ec2form).subscribe(res =>{
      console.log(res);
      
    });
    console.log(this.ec2form);
  }
  go(){
    // console.log('hello2');
  }
}
