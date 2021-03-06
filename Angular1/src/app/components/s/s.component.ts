import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { Sqs } from 'src/app/sqs';
@Component({
  selector: 'app-s',
  templateUrl: './s.component.html',
  styleUrls: ['./s.component.css']
})
export class SComponent implements OnInit {

  constructor(private dataService: DataService, private router: Router) { }
  id: number;
  data: any;
  token:any;

  public s = new Sqs()

  ngOnInit(): void {
    this.dataService.currentId.subscribe(id => this.id = id)
    this.data = this.id;
    this.s.idServer = this.data;
    console.log(this.s)
    
    this.token = localStorage.getItem('token');
    if(this.token == null){
      this.router.navigate((['/login']))
    }

  }
  go(cmp) {
    this.router.navigate(['addServer/' + cmp])
  }
  add(s) {
    this.dataService.addSqs(s).subscribe(res => {
      console.log(res);
      if(res != ""){
        this.router.navigate((['/preview/',this.s.idServer]))
      }
      else{
        this.router.navigate((['/addServer/ec2']))
      }
    });
    
  }
}
