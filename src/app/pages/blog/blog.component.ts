import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/shared/services/blog-service.service';
import { ShareMetaService } from 'src/app/shared/services/share-meta.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  articles: any[] = [];

  constructor(private blogService: BlogService, private shareMetaService:ShareMetaService) { }

  ngOnInit() {
    this.shareMetaService.setMeta([
      {
        title: 'Anastasios Theodosioiu | Blog',
        description: 'This is my personal blog',
        imageUrl: '',
        url: `${environment.website}/blog`
      }
    ]);
    this.blogService.getAllArticles().subscribe(res => {
      console.log(res);
      this.articles = res;
    });
  }

}
