import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {ServerComponent} from './server/server.component';
import {CookingComponent} from './cooking/cooking.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    CookingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
