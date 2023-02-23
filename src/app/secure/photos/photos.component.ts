import { Component } from '@angular/core';
import { Photos } from 'src/app/interfaces/photos';
 
export const PHOTOS: Photos[] = [];


@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent {
  photos = PHOTOS;
  listLength : number = 143;

  ngOnInit() {
    
    for (let i = 0; i < this.listLength; i++) {
      this.photos.push({ id: i, url: '../../../assets/img/2022/ml/kadedec/' + i + '.jpg' });
      

    }
  }

  


}
