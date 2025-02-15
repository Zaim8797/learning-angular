import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-course',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './course.component.html',
  styleUrl: './course.component.scss'
})
export class CourseComponent {

  constructor(private router:Router) {

  }
  stringAndProperty() {
    console.log('Class Interpolation & Property Binding button hovered!')
    this.router.navigateByUrl('string-and-property')
  }

  classBinding() {
    console.log('Class Binding button hovered!')
    this.router.navigateByUrl('class-binding')
  }

  styleBinding() {
    console.log('Style Binding button hovered!')
    this.router.navigateByUrl('style-binding')
  }

  eventBinding() {
    console.log('Event Binding button hovered!')
    this.router.navigateByUrl('event-binding')
  }

  eventFilteringI() {
    console.log('Event Filtring I button hovered!')
    this.router.navigateByUrl('event-filtering-i')
  }

  eventFilteringII() {
    console.log('Event Filtring II button hovered!')
    this.router.navigateByUrl('event-filtering-ii')
  }

  templateVariable() {
    console.log('Template Variable button hovered!')
    this.router.navigateByUrl('template-variable')
  }

  nameAndAge() {
    console.log('Name & Age button hovered!')
    this.router.navigateByUrl('name-and-age')
  }

}
