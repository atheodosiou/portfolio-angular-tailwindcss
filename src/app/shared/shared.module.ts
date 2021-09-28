import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { PostPreviewComponent } from "./components/post-preview/post-preview.component";

const components = [
    PostPreviewComponent
];

@NgModule({
    imports:[CommonModule, RouterModule],
    declarations: [...components],
    exports: [...components]
})
export class SharedModule { }