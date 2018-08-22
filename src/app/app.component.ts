import { Component } from '@angular/core';
import { Model } from './model';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'мой Ангуляр';
  model = new Model();
  getName() {
  	return this.model.user;
  }
  getTodoItems() {
  	return this.model.items;
  }
}
