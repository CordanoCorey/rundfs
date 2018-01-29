import { errorsReducer } from '@caiu/errors';
import { eventsReducer } from '@caiu/events';
import { lookupReducer } from '@caiu/http';
import { routerReducer } from '@caiu/router';
import { Action, ActionReducerMap, configReducer, windowReducer, SidenavActions, sidenavReducer } from '@caiu/store';

import { CurrentUser } from './models';

export function currentUserReducer(state: CurrentUser = new CurrentUser(), action: Action): CurrentUser {

    switch (action.type) {

        default:
            return state;
    }
}

export const reducers: ActionReducerMap<any> = {
    config: configReducer,
    currentUser: currentUserReducer,
    errors: errorsReducer,
    events: eventsReducer,
    lookup: lookupReducer,
    route: routerReducer,
    sidenav: sidenavReducer,
    // window: windowReducer
};
