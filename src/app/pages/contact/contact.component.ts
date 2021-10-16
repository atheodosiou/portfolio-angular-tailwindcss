import { Component, OnInit } from '@angular/core';
import { SocialProfile } from 'src/app/shared/components/social-icons/social-icons.model';
import { SocialIconsService } from 'src/app/shared/services/social-icons.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  settings: SocialProfile[] = [];
  constructor(private socialIconsService: SocialIconsService) { }

  ngOnInit() {
    this.settings = this.socialIconsService.userSocialProfiles;
  }

}
