import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AppPreviewComponent } from "./components/app-preview/app-preview.component";
import { PostPreviewComponent } from "./components/post-preview/post-preview.component";
import { SearchInputComponent } from "./components/search-input/search-input.component";

const components = [
    PostPreviewComponent,
    AppPreviewComponent,
    SearchInputComponent
];

@NgModule({
    imports:[CommonModule, RouterModule, ReactiveFormsModule],
    declarations: [...components],
    exports: [...components]
})
export class SharedModule { }