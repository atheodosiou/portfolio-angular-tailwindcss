import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'post-preview',
  templateUrl: './post-preview.component.html',
  styleUrls: ['./post-preview.component.scss']
})
export class PostPreviewComponent implements OnInit {

  @Input() article:any;

  constructor() { }

  ngOnInit() {
  }

}
