import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { BlogService, Sort } from 'src/app/shared/services/blog-service.service';
import { CanonicalService } from 'src/app/shared/services/canonical.service';
import { ShareMetaService } from 'src/app/shared/services/share-meta.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isOpen: boolean = false;
  latestArticles: number = 3;
  constructor(private blogService: BlogService, private shareMetaService: ShareMetaService, private title:Title, private canonicalService:CanonicalService) { }
  baseUrl = environment.baseUrl;
  articles$ = this.blogService.getAllArticles({ field: 'published_at', value: Sort.DESC }, this.latestArticles);
  apps$ = this.blogService.getApps();

  ngOnInit() {
    this.title.setTitle('Anastasios Theodosioiu | Home');
    this.canonicalService.setCanonicalUrl();
    this.shareMetaService.setMeta([
      {
        type: 'website',
        title: 'Anastasios Theodosioiu | Home',
        description: "I'm a Front-end engineer with a passion for Angular. Welcome to my corner of the internet. I'm glad you're here! 😊",
        imageUrl: `${environment.website}/uploads/anastasios_a7c12027e3.jpeg`,
        url: `${environment.website}/home`
      }
    ]);
  }
}

// RENDERTRON
// https://www.youtube.com/watch?v=ANyOZIcGvB8
