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

  constructor(private dataService: DataService, private router: Router, private route: ActivatedRoute) { }
  id: any;
  ec: any;
  id2: null
  data:any
  message = ""
  token:any;
  public ec2 = new Ec2();
  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.getEc3();
    this.token = localStorage.getItem('token');
    if(this.token == null){
      this.router.navigate((['/login']))
    }
  }


  public ec2form = {

    idServer: null,
    ServerName: null,
    Type: null,
    Storage: 0,
    Firwall: null,
    Machine: null
  };



  getEc3() {
    this.dataService.getEc3ById(this.id).subscribe(res => {
      console.log(res);
      this.ec = res;
      this.ec2form = this.ec;
      this.id2 = this.ec2form.idServer
    });
    console.log(this.id);
  }

  update() {
    
    console.log(this.ec2form);
    this.dataService.updateEc3(this.id, this.ec2form).subscribe(res => {
      this.data = res;
      this.message = this.data.message
      console.log(this.message)

    });
    
    console.log(this.ec2form);
  }
  go() {
    // console.log('hello2');
  }
}
