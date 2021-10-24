import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { SocialIconsService } from '../../services/social-icons.service';
import { SocialProfile } from '../social-icons/social-icons.model';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(private socialIconsService: SocialIconsService) { }

  baseUrl = environment.baseUrl;
  settings: SocialProfile[] = [];
  ngOnInit() {
    this.settings = this.socialIconsService.userSocialProfiles;
  }

}
