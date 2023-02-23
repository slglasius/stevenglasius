import { Component } from '@angular/core';
import { Photos } from 'src/app/interfaces/photos';
 
export const PHOTOS: Photos[] = [];

@Component({
  selector: 'app-coorporate',
  templateUrl: './coorporate.component.html',
  styleUrls: ['./coorporate.component.scss']
})
export class CoorporateComponent {
  photos = PHOTOS;
  listLength : number = 9;

  ngOnInit() {
    
    for (let i = 0; i < this.listLength; i++) {
      this.photos.push({ id: i, url: '../../../../assets/img/coorporate/' + i + '.jpg' });
      

    }
  }
}
