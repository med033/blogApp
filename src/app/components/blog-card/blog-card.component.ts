import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.css'],
})
export class BlogCardComponent implements OnInit {
  @Input() blog: any;
  upvoteBadge = 0;
  downvoteBadge = 0;

  constructor(private router: Router, private blogService: BlogService) {}

  ngOnInit(): void {}
  up(id: any) {
    this.blog.upvote++;
    this.blogService.updateBlog(this.blog).subscribe((data) => {
    });
  }
  down(id: any) {
    this.blog.downvote++;
    this.blogService.updateBlog(this.blog).subscribe((data) => {
    });
  }

  readMore(id: any) {
    this.router.navigate([`blogDetails/${id}`]);
  }
}
