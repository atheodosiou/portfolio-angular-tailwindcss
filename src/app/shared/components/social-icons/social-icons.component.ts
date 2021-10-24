import { Component, Input, OnInit } from '@angular/core';
import { SocialProfile } from './social-icons.model';

@Component({
  selector: 'social-icons',
  templateUrl: './social-icons.component.html',
  styleUrls: ['./social-icons.component.scss']
})
export class SocialIconsComponent implements OnInit {

  @Input() settings: SocialProfile[] | undefined;

  constructor() { }

  ngOnInit() {
  }

}
