import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post.component';
import { RouterModule } from '@angular/router';
import { MarkdownModule, MarkedOptions, MarkedRenderer } from 'ngx-markdown';
import "prismjs";
import "prismjs/components/prism-typescript.min.js";
import "prismjs/components/prism-javascript.min.js";
import "prismjs/components/prism-mongodb.min.js";
import "prismjs/components/prism-markup.min.js";
import "prismjs/components/prism-scss.min.js";
import "prismjs/plugins/line-numbers/prism-line-numbers.js";
import "prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard.min.js";


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: "",
      pathMatch: 'full',
      component: PostComponent
    }]),
    MarkdownModule.forRoot()
  ],
  declarations: [PostComponent]
})
export class PostModule { }
