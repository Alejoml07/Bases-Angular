import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  rutas = [
    {
      name : 'Home',
      path: '/Home'

    },
    {
      name : 'About',
      path: '/About'

    },
    {
      name : 'Contact',
      path: '/Contact'

    },
    {
      name : 'Post',
      path: '/Post'

    }


  ];

}
