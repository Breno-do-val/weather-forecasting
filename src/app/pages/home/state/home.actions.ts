import { Bookmark } from './../../../shared/models/bookmark.model';
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

export const toggleBookmark = createAction(
    '[Home] Toggle Bookmark',
    props<{ entity: Bookmark }>()
)

export const clearHomeState = createAction(
    '[Home] Clear Home State'
);