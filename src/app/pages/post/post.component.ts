import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { BlogService } from 'src/app/shared/services/blog-service.service';
import { ShareMetaService } from 'src/app/shared/services/share-meta.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  article: any;
  featuredImageUrl: string = '';
  articleUrl: string = '';

  shareLink: string = `${environment.website}/blog/`;
  constructor(private blogService: BlogService, private activatedRoute: ActivatedRoute, private shareMetaService: ShareMetaService) {
    this.activatedRoute.params.subscribe(params => {
      this.blogService.getArticleBySlug(params?.slag).subscribe(article => {
        this.shareLink += article[0].slug;
        const regex = /\/uploads\//g;
        if (Array.isArray(article)) {
          (article as any[]).forEach(ar => {
            ar.content = ar.content.replace(regex, `${environment.baseUrl}/uploads/`);
          });
          this.featuredImageUrl = `${environment.baseUrl}${article[0]?.featured_image?.url}`;
        } else {
          article = article.content.replace(regex, `${environment.baseUrl}/uploads/`);
          this.featuredImageUrl = `${environment.baseUrl}${article?.featured_image?.url}`;
        }
        this.article = article;
        // this.setMetaForArticle(article);
        console.log(this.article);
      })
    });
  }

  ngOnInit() { }

  private setMetaForArticle(article: any[]) {
    const url = `${environment.website}/blog/${article[0]?.slug}`;
    this.articleUrl = url;
    this.shareMetaService.setMeta([
      {
        type:'article',
        title: article[0]?.title,
        description: article[0]?.description,
        imageUrl: `${environment.baseUrl}${article[0]?.featured_image?.url}`,
        url: url
      }
    ]);
  }

  scrolToShareButtons(el: HTMLElement | undefined) {
    console.log("Scrol")
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
