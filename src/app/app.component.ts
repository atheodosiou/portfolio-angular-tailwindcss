import { Component } from '@angular/core';
import { SocialIconsService } from './shared/services/social-icons.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private socialIconsService: SocialIconsService) {
    this.socialIconsService.userSocialProfiles = [
      { icon: 'fab fa-linkedin', profileUrl: 'https://www.linkedin.com/in/anastasios-theodosiou/' },
      { icon: 'fab fa-twitter', profileUrl: 'https://twitter.com/atheodosiou91' },
      { icon: 'fab fa-github', profileUrl: 'https://github.com/atheodosiou' },
      { icon: 'fab fa-google', profileUrl: 'mailto:anastasios.theodosiou@gmail.com?subject=Get in touch' }
    ];
  }

}
