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

  constructor(private blogService: BlogService, private shareMetaService: ShareMetaService) { }

  ngOnInit() {
    this.shareMetaService.setMeta([
      {
        type:'website',
        title: 'Anastasios Theodosioiu | Blog',
        description: 'This is my personal blog',
        imageUrl: `${environment.website}/uploads/anastasios_a7c12027e3.jpeg`,
        url: `${environment.website}/blog`
      }
    ]);
    this.blogService.getAllArticles().subscribe(res => {
      this.articles = res;
    });
  }

  onSearch(term: string) {
    this.blogService.searchArticles(term).subscribe(res => {
      this.articles = res;
    });
  }
}
