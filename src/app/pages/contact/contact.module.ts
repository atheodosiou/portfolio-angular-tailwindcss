import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: "",
      component: ContactComponent
    }]),
    SharedModule
  ],
  declarations: [ContactComponent]
})
export class ContactModule { }
