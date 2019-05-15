import { Component, OnInit } from '@angular/core';
import {PostModel} from './Post.model';
import {PostService} from '../post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: PostModel[];
  pageSize = 2;
  constructor(private service: PostService) {}
  ngOnInit() {
    console.log("hello");
    // @ts-ignore
    this.service.getPosts().subscribe(actionArray => {
      this.posts = actionArray.map(item => {
        // @ts-ignore
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        } as PostModel;
      })
    });
    setTimeout(()=>{
      console.log(this.posts);
    }, 3000);
  }

}
