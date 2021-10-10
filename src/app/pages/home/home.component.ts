import { Component, OnInit } from '@angular/core';
import { BlogService, Sort } from 'src/app/shared/services/blog-service.service';
import { EmailService } from 'src/app/shared/services/email.service';
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
  constructor(private blogService: BlogService, private shareMetaService: ShareMetaService, private emailService: EmailService) { }
  baseUrl = environment.baseUrl;
  articles$ = this.blogService.getAllArticles({ field: 'published_at', value: Sort.DESC }, this.latestArticles);
  apps$ = this.blogService.getApps();

  ngOnInit() {
    this.shareMetaService.setMeta([
      {
        title: 'Anastasios Theodosioiu | Home',
        description: 'This is my personal portfolio and blog',
        imageUrl: '',
        url: `${environment.website}/home`
      }
    ]);
  }

  sendEmail() {
    this.emailService.sendEmail({
      from_name: "Demo user",
      message: "Test message from demo user",
      from_email: "demo_user@gmail.com",
      from_phone: "6978687577",
    }).then(res => {
      console.log(res);
      alert("Email send!")
    }).catch(e => {
      console.error(e);
    });
  }
}
