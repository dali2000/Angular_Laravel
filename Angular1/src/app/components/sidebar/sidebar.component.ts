import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }
  public check =false
  public toggle(){
    if(this.check==true){
      this.check=false
    }
    else{
      this.check=true
    }
    
  }

}
