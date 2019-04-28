import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HotelsComponent } from './hotels/hotels.component';
import { SingleHotelPageComponent } from './single-hotel-page/single-hotel-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/hotels', pathMatch: 'full' },
  { path: 'hotels', component: HotelsComponent },
  { path: 'hotels/:id', component: SingleHotelPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
