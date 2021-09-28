import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "/home" },
  { path: "home", loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
  { path: "about", loadChildren: () => import('./pages/about/about.module').then(m => m.AboutModule) },
  { path: "blog", loadChildren: () => import('./pages/blog/blog.module').then(m => m.BlogModule) },
  { path: "**", redirectTo: "/home" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration:'top'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
