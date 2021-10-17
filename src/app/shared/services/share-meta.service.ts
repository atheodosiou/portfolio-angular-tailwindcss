import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { IShareMeta } from '../models/share-meta.model';
import { Meta } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class ShareMetaService {

  constructor(private meta: Meta) { }


  public setMeta(data: IShareMeta[]) {
    if (data?.length > 0) {
      data.forEach(metaTag => {
        if (this.meta.getTag("property='og:type'")) {
          this.meta.updateTag({ property: 'og:type', content: metaTag.type }, 'property="og:type"');
          console.log("Meta tag found and updated");
        } else {
          this.meta.addTag({ property: "og:type", content: metaTag.type });
        }

        if (this.meta.getTag("property='og:title'")) {
          this.meta.updateTag({ property: 'og:title', content: metaTag.title }, 'property="og:title"');
        } else {
          this.meta.addTag({ property: "og:title", content: metaTag.title });
        }

        if (this.meta.getTag("property='og:description'")) {
          this.meta.updateTag({ property: 'og:description', content: metaTag.description }, 'property="og:description"');
        } else {
          this.meta.addTag({ property: "og:description", content: metaTag.description });
        }

        if (this.meta.getTag("property='og:url'")) {
          this.meta.updateTag({ property: 'og:url', content: metaTag.url }, 'property="og:url"');
        } else {
          this.meta.addTag({ property: "og:url", content: metaTag.url });
        }

        if (this.meta.getTag("property='og:image'")) {
          this.meta.updateTag({ property: 'og:image', content: metaTag.imageUrl }, 'property="og:image"');
        } else {
          this.meta.addTag({ property: "og:image", content: metaTag.imageUrl });
        }
      });
    }
  }


}
