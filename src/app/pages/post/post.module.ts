import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post.component';
import { RouterModule } from '@angular/router';
import { MarkdownModule, MarkedOptions } from 'ngx-markdown';
import { HttpClient } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: "",
      pathMatch: 'full',
      component: PostComponent
    }]),
    MarkdownModule.forRoot({
      loader: HttpClient, // optional, only if you use [src] attribute
      markedOptions: {
        provide: MarkedOptions,
        useValue: {
          gfm: true,
          breaks: false,
          pedantic: false,
          smartLists: true,
          smartypants: false
        },
      },
    })
  ],
  declarations: [PostComponent]
})
export class PostModule { }
