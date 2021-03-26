import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import { TypeaheadModule } from 'ngx-bootstrap/typeahead';

import { LoaderComponent } from './loader/loader.component';
import { DetailedWeatherComponent } from './detailed-weather/detailed-weather.component';
import { CitiesTypeahedComponent } from './cities-typeahed/cities-typeahed.component';

@NgModule({
  imports: [
    CommonModule,
    TypeaheadModule.forRoot()
  ],
  declarations: [
    LoaderComponent,
    DetailedWeatherComponent,
    CitiesTypeahedComponent,
  ],
  exports: [
    LoaderComponent,
    DetailedWeatherComponent,
    CitiesTypeahedComponent,
  ]
})
export class ComponentsModule {
}
