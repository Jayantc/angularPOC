import { Component, OnInit } from '@angular/core';
import { Blog } from '../model/bloghub';
import { BlogService } from '../service/blog.service';

@Component({
  selector: 'app-blogform',
  templateUrl: './blogform.component.html',
  styleUrls: ['./blogform.component.css']
})
export class BlogformComponent implements OnInit {
  categaries=['technical', 'personal', 'nature']
  constructor(private service:BlogService) { }

  ngOnInit(): void {
  }

insert(blog: Blog){
  console.log('Inserting');
  this.service.addBlog(blog);
}

}
