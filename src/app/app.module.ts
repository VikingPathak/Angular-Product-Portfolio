import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from "@angular/common";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { DarkNavbarComponent } from './dark-navbar/dark-navbar.component';
import { TshirtsPageComponent } from './tshirts-page/tshirts-page.component';
import { ShoesPageComponent } from './shoes-page/shoes-page.component';
import { WatchPageComponent } from './watch-page/watch-page.component';

@NgModule({
  declarations: [
    AppComponent,
    DarkNavbarComponent,
    TshirtsPageComponent,
    ShoesPageComponent,
    WatchPageComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forRoot([
      { path: "", component: TshirtsPageComponent },
      { path: "tshirts", component: TshirtsPageComponent },
      { path: "shoes", component: ShoesPageComponent },
      { path: "watches", component: WatchPageComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
