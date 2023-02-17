import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBlogComponent } from './components/add-blog/add-blog.component';
import { BlogDetailComponent } from './components/blog-detail/blog-detail.component';
import { DisplayBlogsComponent } from './components/display-blogs/display-blogs.component';

const routes: Routes = [
  {path: '' , component : DisplayBlogsComponent}  ,
  {path: 'addBlog' , component: AddBlogComponent },
  {path: 'blogDetails/:id' , component: BlogDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
