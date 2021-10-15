import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post.component';
import { RouterModule } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';

import "prismjs/prism.js";
import "prismjs/components/prism-typescript.min.js";
import "prismjs/components/prism-javascript.min.js";
import "prismjs/components/prism-mongodb.min.js";
import "prismjs/components/prism-markup.min.js";
import "prismjs/components/prism-scss.min.js";
import "prismjs/plugins/line-numbers/prism-line-numbers.js";
import { SharedModule } from 'src/app/shared/shared.module';
import { DisqusModule, DisqusService } from 'ngx-disqus';
import { environment } from 'src/environments/environment';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: "",
      pathMatch: 'full',
      component: PostComponent
    }]),
    MarkdownModule.forRoot(),
    ShareButtonsModule,
    ShareIconsModule,
    SharedModule,
    DisqusModule.forRoot(environment.disqusShortname)
  ],
  declarations: [PostComponent],
  providers:[DisqusService]
})
export class PostModule { }
