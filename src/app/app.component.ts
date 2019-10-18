import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts = [
    {
      title:'Mon premier post'
    },
    {
      title:'Mon deuxième post'
    },
    {
      title:'Encore un post'
    }
  ];
}
