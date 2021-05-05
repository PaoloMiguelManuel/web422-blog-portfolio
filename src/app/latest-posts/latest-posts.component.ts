import { Component, OnInit, Input } from '@angular/core';
import { BlogPost } from '../../BlogPost';
import { PostService } from '../post.service';


@Component({
  selector: 'app-latest-posts',
  templateUrl: './latest-posts.component.html',
  styleUrls: ['./latest-posts.component.css']
})

export class LatestPostsComponent implements OnInit {

  //@Input() posts: BlogPost;
  blogPosts: Array<BlogPost>;

  constructor(private posServ: PostService) { }

  ngOnInit(): void {
    this.posServ.getPosts(1, null, null).subscribe((data) => {
      this.blogPosts = data.slice(0,3)
    });
  }
}