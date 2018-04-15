import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../class/post'

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() data: Post

  constructor() { }

  ngOnInit() {
  }

  onLike() {
    this.data.loveIts++
  }

  onDisLike() {
    this.data.dontLoveIts++
  }

}
