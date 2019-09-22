import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {
   public mytitle = 'simple text using string interpolation';
   buttonstatus = false;
   successClass = 'text-success';
   hasError = true;
   multipleclasses = {
    'text-success' : !this.hasError,
    'text-danger' : this.hasError
   };
   multiplestyles = {
    color : 'blue',
    fontSize : '30px',
    fontStyle : 'italic'
   };
   public name: any;
  constructor() { }

  ngOnInit() {
  }
  changetitle() {
    this.mytitle = 'Iam changed';
  }

}
