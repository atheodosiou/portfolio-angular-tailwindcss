import { Component, OnInit } from '@angular/core';
import { BlogService, Sort } from 'src/app/shared/services/blog-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isOpen: boolean = false;
  latestArticles: number = 3;
  constructor(private blogService: BlogService) { }

  articles$ = this.blogService.getAllArticles({ field: 'published_at', value: Sort.DESC }, this.latestArticles);

  ngOnInit() {
  }

}
