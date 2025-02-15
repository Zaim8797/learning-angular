import { Component } from '@angular/core';

@Component({
  selector: 'app-event-filtering-i',
  standalone: true,
  imports: [],
  templateUrl: './event-filtering-i.component.html',
  styleUrl: './event-filtering-i.component.scss'
})
export class EventFilteringIComponent {

  keyUpEvent(event:any) {
    if(event.keyCode == 13) {
      console.log('ENTER key pressed')
    }
  }
  
}
