import { Component } from '@angular/core';
import { Photos } from 'src/app/interfaces/photos';
export const PHOTOS: Photos[] = [];

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent {
  photos = PHOTOS;
  listLength : number = 35;

  ngOnInit() {
    
    for (let i = 0; i < this.listLength; i++) { 
      this.photos.push({ id: i, url: '../../../../assets/img/events/' + i + '.jpg' });
      

    }
  }
}
