import { Component, OnInit } from '@angular/core';
import {PhotosService} from './photos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  myphotos: any;
  constructor(private photos: PhotosService) { }
  ngOnInit() {
    this.photos.getphotos().subscribe((data) => {
      this.myphotos = data;
    });
  }
}
