import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directivetypes',
  templateUrl: './directivetypes.component.html',
  styleUrls: ['./directivetypes.component.css']
})
export class DirectivetypesComponent implements OnInit {
 public users: any = [{id : 1, name: 'dilep', dob : new Date('07/22/1996')},
                      {id : 1, name: 'dilep', dob : new Date('07/22/1994')},
                      {id : 1, name: 'dilep', dob : new Date('07/22/1990')}];
public isconditionok = false;
  constructor() { }
  ngOnInit() {
  }

}
