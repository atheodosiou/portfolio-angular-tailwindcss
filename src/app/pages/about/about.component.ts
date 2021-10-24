import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ShareMetaService } from 'src/app/shared/services/share-meta.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private shareMetaService: ShareMetaService, private title:Title) { }

  ngOnInit() {
    this.title.setTitle('Anastasios Theodosioiu | About');
    this.shareMetaService.setMeta([
      {
        type: 'website',
        title: 'Anastasios Theodosioiu | About',
        description: "I'm a Front-end engineer with a passion for Angular. Welcome to my corner of the internet. I'm glad you're here! 😊",
        imageUrl: `${environment.website}/uploads/anastasios_a7c12027e3.jpeg`,
        url: `${environment.website}/about`
      }
    ]);
  }

}
