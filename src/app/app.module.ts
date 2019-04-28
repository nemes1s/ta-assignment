import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HotelsComponent } from './hotels/hotels.component';
import { HttpClientModule } from '@angular/common/http';
import { SingleHotelListItemComponent } from './single-hotel-list-item/single-hotel-list-item.component';
import { SingleHotelPageComponent } from './single-hotel-page/single-hotel-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HotelsComponent,
    SingleHotelListItemComponent,
    SingleHotelPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
