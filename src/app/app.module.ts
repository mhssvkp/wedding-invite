import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  NgbCarouselModule,
  NgbModule,
  NgbNavModule,
} from '@ng-bootstrap/ng-bootstrap';
import { NavConfigComponent } from './nav-config/nav-config.component';
import { TheBeginningComponent } from './the-beginning/the-beginning.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, NavConfigComponent, TheBeginningComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbNavModule,
    NgbCarouselModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
