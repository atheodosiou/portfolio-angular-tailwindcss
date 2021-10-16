import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { GrowlComponent } from './shared/components/growl/growl.component';
import { NavigationBarComponent } from './shared/components/navigation-bar/navigation-bar.component';
import { SocialIconsComponent } from './shared/components/social-icons/social-icons.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    FooterComponent,
    GrowlComponent,
    SocialIconsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  exports:[SocialIconsComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
