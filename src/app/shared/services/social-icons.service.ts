import { Injectable } from '@angular/core';
import { SocialProfile } from '../components/social-icons/social-icons.model';

@Injectable({
  providedIn: 'root'
})
export class SocialIconsService {

  constructor() { }

  private settings: SocialProfile[] = [];

  set userSocialProfiles(value: SocialProfile[]) {
    this.settings = value;
  }

  get userSocialProfiles(): SocialProfile[] {
    return this.settings;
  }

}
