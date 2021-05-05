import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {

  // tags: Array<string> =[
  //   "#funny",
  //   "#dramatic",
  //   "#rental",
  //   "#seeagain",
  //   "#spooky",
  //   "#worththecost",
  //   "#lovedIt",
  //   "#scary",
  //   "#silly",
  //   "#good4kidz"
  //  ];
  tags: Array<string>;

  constructor(private posServ: PostService) { }

  ngOnInit(): void {
    this.posServ.getTags().subscribe((data) => {
      this.tags = data
    });
  }
}