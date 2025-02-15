import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-name-and-age',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './name-and-age.component.html',
  styleUrl: './name-and-age.component.scss'
})
export class NameAndAgeComponent {

  name: string = 'Zaim'
  umur: number = 22
  
  tambahUmur() {
    console.log("Umur tambah satu")

    this.umur++
  }

  tolakUmur() {
    console.log("Umur tolak satu")

    this.umur--
  }

}
