import { Component } from '@angular/core';
import { Photos } from 'src/app/interfaces/photos';
 
export const PHOTOS: Photos[] = [];

@Component({
  selector: 'app-seccond',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent {
  photos = PHOTOS;
  listLength : number = 1;

  ngOnInit() {
    
    for (let i = 0; i < this.listLength; i++) {
      this.photos.push({ id: i, url: '../../../../assets/img/albums/second/' + i + '.jpg' });
      

    }
  }
}
