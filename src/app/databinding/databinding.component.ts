import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {
   public mytitle = 'simple text using string interpolation';
   buttonstatus = false;
   public name;
  constructor() { }

  ngOnInit() {
  }
  changetitle() {
    this.mytitle = 'Iam changed';
  }

}
