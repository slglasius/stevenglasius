import { Component } from '@angular/core';
import { Photos } from 'src/app/interfaces/photos';
 
export const PHOTOS: Photos[] = [];

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent {
  photos = PHOTOS;
  listLength : number = 143;

  ngOnInit() {
    
    for (let i = 0; i < this.listLength; i++) {
      this.photos.push({ id: i, url: '../../../../assets/img/albums/first/' + i + '.jpg' });
      

    }
  }
}
