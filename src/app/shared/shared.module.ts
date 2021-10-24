import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AppPreviewComponent } from "./components/app-preview/app-preview.component";
import { ContactFormComponent } from "./components/contact-form/contact-form.component";
import { PostPreviewComponent } from "./components/post-preview/post-preview.component";
import { SearchInputComponent } from "./components/search-input/search-input.component";
import { SocialIconsComponent } from "./components/social-icons/social-icons.component";
import { GetTagsPipe } from "./pipes/getTags.pipe";

const components = [
    PostPreviewComponent,
    AppPreviewComponent,
    SearchInputComponent,
    ContactFormComponent
];

const pipes = [
    GetTagsPipe
];

@NgModule({
    imports: [CommonModule, RouterModule, ReactiveFormsModule],
    declarations: [...components, ...pipes],
    exports: [...components, ...pipes]
})
export class SharedModule { }