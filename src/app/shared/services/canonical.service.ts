import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
@Injectable({
  providedIn: 'root'
})
export class CanonicalService {

  constructor(@Inject(DOCUMENT) private dom: Document) { }

  setCanonicalUrl(url?: string) {
    let link: HTMLLinkElement | null = this.dom.querySelector('link[rel="canonical"]');
    const canUrl = url == undefined ? this.dom.URL : url;

    if (!link) {
      link = this.dom.createElement('link');
    }

    link.setAttribute('rel', 'canonical');
    this.dom.head.appendChild(link);
    link.setAttribute('href', canUrl);
  }
}
