import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path:'',
      pathMatch:'full',
      component:BlogComponent
    },{
      path:':slag',
      loadChildren: ()=>import('../post/post.module').then(m=>m.PostModule)
    }]),
    SharedModule
  ],
  declarations: [BlogComponent]
})
export class BlogModule { }
