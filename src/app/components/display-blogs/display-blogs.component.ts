import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-display-blogs',
  templateUrl: './display-blogs.component.html',
  styleUrls: ['./display-blogs.component.css'],
})
export class DisplayBlogsComponent implements OnInit {
  blogs: any = [];
  searchText!: string;
  constructor(private blogService: BlogService) {}

  ngOnInit(): void {
    this.blogService.fetchBlogs().subscribe((data) => {
      this.blogs = data.blogs;
    });
  }
}
