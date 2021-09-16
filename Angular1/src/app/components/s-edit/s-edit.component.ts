import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router, RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Sqs } from 'src/app/sqs';

@Component({
  selector: 'app-s-edit',
  templateUrl: './s-edit.component.html',
  styleUrls: ['./s-edit.component.css']
})
export class SEditComponent implements OnInit {

  constructor(private dataService: DataService, private router: Router, private route: ActivatedRoute) { }
  id: any;
  s1 :any;
  id2: null
  data:any
  message = ""
  public s = new Sqs();
  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.getSqsById();
  }

  getSqsById(){
    return this.dataService.getSqsById(this.id).subscribe(res => {
      console.log(res);
      this.s1 = res;
      this.s = this.s1;
      this.id2 = this.s.idServer
    });
  }
  updateSqs(s) {
    this.dataService.updateSqs(this.id,s).subscribe(res => {
      console.log(res);
      this.data = res;
      this.message = this.data.message
      console.log(this.message)
    });
    
    
  }
}
