import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { BlogService } from 'src/app/shared/services/blog-service.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  article: any;

  constructor(private blogService: BlogService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(params => {
      this.blogService.getArticleBySlug(params?.slag).subscribe(article => {
        this.article = article;
      })
    });
  }

  ngOnInit() {
  }

}
