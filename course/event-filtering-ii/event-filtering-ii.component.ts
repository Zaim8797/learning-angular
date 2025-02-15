import { Component } from '@angular/core';

@Component({
  selector: 'app-event-filtering-ii',
  standalone: true,
  imports: [],
  templateUrl: './event-filtering-ii.component.html',
  styleUrl: './event-filtering-ii.component.scss'
})
export class EventFilteringIIComponent {

  keyUpFiltering() {
    console.log('a button pressed')
  }
  
}
