import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  standalone: true,
  imports: [],
  templateUrl: './event-binding.component.html',
  styleUrl: './event-binding.component.scss'
})
export class EventBindingComponent {

  clickEvent() {
    console.log('Button Clicked !')
  }

  mouseOverEvent(){
    console.log('Button Hovered !')
  }
  
}
