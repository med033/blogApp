import { Pipe, PipeTransform } from '@angular/core';
import { Blog } from './components/Blog';
import { BlogService } from './services/blog.service';
const { isArray }=Array;

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(blogs: Blog[], find: string): Blog[] {
    if(!blogs) return [];
    if(!find) return blogs;
    find = find.toLowerCase();
    return search( blogs, find);
   }
}

function search(entries: any[], search: string) {

  search = search.toLowerCase();

  return entries.filter(function (obj) {
    const keys: string[] = Object.keys(obj);
    return keys.some(function (key) {
      const value = obj[key];
      if (isArray(value)) {
        return value.some(v => {
          return v.toLowerCase().includes(search);
        });
      }
      else if (!isArray(value)) {
        return value.toLowerCase().includes(search);
      }
    })
  });
}