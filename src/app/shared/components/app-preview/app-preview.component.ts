import { Component, OnInit, Input } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-preview',
  templateUrl: './app-preview.component.html',
  styleUrls: ['./app-preview.component.scss']
})
export class AppPreviewComponent implements OnInit {

  @Input() app:any;

  baseUrl=environment.baseUrl;
  
  constructor() { }

  ngOnInit() {
  }

}
