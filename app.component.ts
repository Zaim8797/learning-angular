import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'projek-zaim'

  image: string = 'https://wallpapers.com/images/hd/glowing-red-angular-logo-7z0pp69vb06wl7aa.jpg'
  fruit: string = 'Apple' 

  //String Interpolation & Property Binding
  isDisabled: boolean = false

  //Class Binding
  isActive: boolean = true

  //Style Binding




  constructor(
    private router: Router
  )
  
  {
    console.log("test123")
  }

 



 



}
