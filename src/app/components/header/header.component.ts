import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  blogs: any = {};
  searchText!: string;
  constructor(private blogService: BlogService) {}

  ngOnInit() {}
}
