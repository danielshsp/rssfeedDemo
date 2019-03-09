import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FeedServiceService } from './feed-service.service'
import { AppComponent } from './app.component';
import { FeedCardComponent } from './feed-card/feed-card.component';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HttpModule }    from '@angular/http';




@NgModule({
  declarations: [
    AppComponent,
    FeedCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule
   

  ],
  providers: [
    FeedServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
