import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AppPreviewComponent } from "./components/app-preview/app-preview.component";
import { PostPreviewComponent } from "./components/post-preview/post-preview.component";

const components = [
    PostPreviewComponent,
    AppPreviewComponent
];

@NgModule({
    imports:[CommonModule, RouterModule],
    declarations: [...components],
    exports: [...components]
})
export class SharedModule { }