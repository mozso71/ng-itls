import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import {
  DemoReducer,
  DemosState,
} from 'src/app/demos/store/reducers/demos.reducer';
import { environment } from '../../../environments/environment';

export interface State {
  demos: DemosState;
}

export const reducers: ActionReducerMap<State> = {
  demos: DemoReducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
