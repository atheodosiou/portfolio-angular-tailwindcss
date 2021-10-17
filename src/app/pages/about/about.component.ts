import { Component, OnInit } from '@angular/core';
import { ShareMetaService } from 'src/app/shared/services/share-meta.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private shareMetaService: ShareMetaService) { }

  ngOnInit() {
    this.shareMetaService.setMeta([
      {
        title: 'Anastasios Theodosioiu | About',
        description: 'This is my personal portfolio and blog',
        imageUrl: `${environment.website}/uploads/anastasios_a7c12027e3.jpeg`,
        url: `${environment.website}/about`
      }
    ]);
  }

}
