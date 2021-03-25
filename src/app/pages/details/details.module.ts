import { DetailsGuard } from './services/details.guard';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsPage } from './containers/details/details.page';
import { RouterModule } from '@angular/router';
import { DailyWeatherComponent } from './components/daily-weather/daily-weather.component';

const routes = [
  {
    path: '', component: DetailsPage, canActivate: [ DetailsGuard]
  }
]

@NgModule({
  declarations: [DetailsPage, DailyWeatherComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    DetailsGuard
  ]
})
export class DetailsModule { }
