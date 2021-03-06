import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "/home" },
  { path: "home", loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
  { path: "blog", loadChildren: () => import('./pages/blog/blog.module').then(m => m.BlogModule) },
  { path: "about", loadChildren: () => import('./pages/about/about.module').then(m => m.AboutModule) },
  { path: "contact", loadChildren: () => import('./pages/contact/contact.module').then(m => m.ContactModule) },
  { path: "**", redirectTo: "/home" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top', initialNavigation: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
