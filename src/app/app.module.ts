import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GiphyServiceComponent } from './giphy-service/giphy-service.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    AppComponent,
    GiphyServiceComponent,
    HeaderComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    NgbModule, 
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
