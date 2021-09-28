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
      this.meta.removeTag("property='og:title'");
      this.meta.removeTag("property='og:description'");
      this.meta.removeTag("property='og:url'");
      this.meta.removeTag("property='og:image'");
      
      data.forEach(metaTag => {
        this.meta.addTag({ property: "og:title", content: metaTag.title });
        this.meta.addTag({ property: "og:description", content: metaTag.description });
        this.meta.addTag({ property: "og:url", content: metaTag.url });
        this.meta.addTag({ property: "og:image", content: metaTag.imageUrl });
      });
    }
  }


}
