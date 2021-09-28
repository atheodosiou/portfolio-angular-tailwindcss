import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post.component';
import { RouterModule } from '@angular/router';
import { MarkdownModule, MarkedOptions } from 'ngx-markdown';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ShareButtonsConfig } from 'ngx-sharebuttons';
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';

const customConfig: ShareButtonsConfig = {
  include: ['facebook', 'twitter', 'google','linkedin'],
  exclude: ['tumblr', 'stumble', 'vk'],
  theme: 'modern-light',
  gaTracking: true,
  twitterAccount: 'atheodosiou91'
}

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
          smartypants: false,
        },
      },
    }),
    ShareButtonsModule.withConfig(customConfig)
  ],
  declarations: [PostComponent]
})
export class PostModule { }
