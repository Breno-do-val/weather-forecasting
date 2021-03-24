import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CityWeather } from '../../../../shared/models/weather.model';

import * as fromHomeActions from '../../state/home.actions';
import * as fromHomeSelectors from '../../state/home.selectors';
@Component({
  selector: 'jv-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit {

  searchControl: FormControl;

  cityWeather$: Observable<CityWeather>;
  loading$: Observable<boolean>;
  error$: Observable<boolean>;

  text: string;

  constructor(private store: Store) { }

  ngOnInit() {
    this.searchControl = new FormControl('', Validators.required);

    this.cityWeather$ = this.store.pipe(select(fromHomeSelectors.selectCurrentWeather));
    this.loading$ = this.store.pipe(select(fromHomeSelectors.selectCurrentWeatherLoading));
    this.error$ = this.store.pipe(select(fromHomeSelectors.selectCurrentWeatherError));

  }

  doSearch() {
    const query = this.searchControl.value
    this.store.dispatch(fromHomeActions.LoadCurrentWeather({ query }));
  }

}
