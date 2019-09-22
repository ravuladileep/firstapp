import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../photos.service';

@Component({
  selector: 'app-photolist',
  templateUrl: './photolist.component.html',
  styleUrls: ['./photolist.component.css']
})
export class PhotolistComponent implements OnInit {
photos: any;
  constructor(private photo: PhotosService) { }

  ngOnInit() {
    this.photo.getphotos()
    .subscribe((data) => {
      this.photos = data;
     });
  }

}
