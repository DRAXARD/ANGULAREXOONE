import { Component } from '@angular/core';
import { POSTS } from './datas/posts'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'our new blog';
  posts = POSTS
}
