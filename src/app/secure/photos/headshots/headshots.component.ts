import { Component } from '@angular/core';
import { Photos } from 'src/app/interfaces/photos';
 
export const PHOTOS: Photos[] = [];

@Component({
  selector: 'app-headshots',
  templateUrl: './headshots.component.html',
  styleUrls: ['./headshots.component.scss']
})
export class HeadshotsComponent {
  photos = PHOTOS;
  listLength : number = 143;

  ngOnInit() {
    
    for (let i = 0; i < this.listLength; i++) {
      this.photos.push({ id: i, url: '../../../../assets/img/headshots/' + i + '.jpg' });
      

    }
  }
}
