import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ShareMetaService } from 'src/app/shared/services/share-meta.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  constructor(private shareMetaService: ShareMetaService, private title: Title) { }

  ngOnInit() {
    this.title.setTitle('Anastasios Theodosioiu | Contact');
    this.shareMetaService.setMeta([
      {
        type: 'website',
        title: 'Anastasios Theodosiou | Contact',
        description: 'Get in touch',
        imageUrl: `${environment.website}/uploads/anastasios_a7c12027e3.jpeg`,
        url: `${environment.website}/contact`
      }
    ]);
  }
}
