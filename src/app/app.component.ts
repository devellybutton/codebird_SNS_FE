import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { HashtagsComponent } from './hashtags/hashtags.component';
import { ImagePreviewComponent } from './image-preview/image-preview.component';
import { InputSectionComponent } from './input-section/input-section.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    HashtagsComponent,
    ImagePreviewComponent,
    InputSectionComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'codebird';
}
