import { createAction, props } from "@ngrx/store";

export const LoadCurrentWeather = createAction(
    '[Home] LoadCurrentWeather',
    props<{ query: string}>()
);

export const LoadCurrentWeatherSuccess = createAction (
    '[Weather API] Load Current Weather Success',
    props<{ entity: any }>()
);

export const LoadCurrentWeatherFailed = createAction(
    '[Weather API] Load Current Weather Failed'
);