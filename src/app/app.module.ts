import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HashtagsComponent } from './hashtags/hashtags.component';
import { FooterComponent } from './footer/footer.component';
import { ImagePreviewComponent } from './image-preview/image-preview.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HashtagsComponent,
    FooterComponent,
    ImagePreviewComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent], // 애플리케이션의 루트 컴포넌트
})
export class AppModule {}
