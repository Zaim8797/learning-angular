import { Component } from '@angular/core';

@Component({
  selector: 'app-template-variable',
  standalone: true,
  imports: [],
  templateUrl: './template-variable.component.html',
  styleUrl: './template-variable.component.scss'
})
export class TemplateVariableComponent {

  templateVariable(user:HTMLInputElement) {
    console.log(user.value)
    console.log(user.id)
  }
  
}
