import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  SERVER_URL:string="http://localhost:3000";

  constructor(private httpClient : HttpClient) { }

  addBlog(blog:any){
    return this.httpClient.post<{message : string}>(this.SERVER_URL + '/api/addBlog', blog)
  }
  
  fetchBlogs(){
    return this.httpClient.get<{blogs : any}>(this.SERVER_URL + '/api/allBlogs')
  }

  fetchBlogById(blogID:any){
    return this.httpClient.get<{blog:any}>(`${this.SERVER_URL + '/api/allBlogs'}/${blogID}`);
  
  }

  updateBlog(blog:any){
    return this.httpClient.put<{message : string}>(`${this.SERVER_URL + '/api/allBlogs'}/${blog._id}`, blog)
  }
  
  public searchBlog(blog: any){
    return this.httpClient.post<{blogs : any}>(`${this.SERVER_URL + '/api/searchBlog'}`, blog)
  }
}
