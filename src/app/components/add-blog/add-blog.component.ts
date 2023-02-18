import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css'],
})
export class AddBlogComponent implements OnInit {
  addBlogForm!: FormGroup;
  blog: any;
  searchForm!: FormGroup;

  constructor(private blogService: BlogService, private router: Router) {}

  ngOnInit(): void {
    this.addBlogForm = new FormGroup({
      authorName: new FormControl('', [
        Validators.minLength(3),
        Validators.required,
      ]),
      title: new FormControl('', [
        Validators.minLength(6),
        Validators.required,
      ]),
      content: new FormControl('', [
        Validators.minLength(1000),
        Validators.required,
      ]),
    });
  }
  get authorName() {
    return this.addBlogForm.get('authorName')!;
  }
  get title() {
    return this.addBlogForm.get('title')!;
  }
  get content() {
    return this.addBlogForm.get('content')!;
  }

  addBlog(blog: any) {
    blog.upvote = 0;
    blog.downvote = 0;

    this.blogService.addBlog(blog).subscribe((data) => {
      this.router.navigate(['']);
      window.location.replace('')
    });
  }
}
