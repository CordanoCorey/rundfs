import { Action } from '@caiu/store';

export class CurrentUserActions {
    static GET = '[CurrentUser] Get';
    static LOGIN = '[CurrentUser] Login';
    static LOGOUT = '[CurrentUser] Logout';
    static RESET_PASSWORD = '[CurrentUser] Reset';
    static UPDATE_SETTINGS = '[CurrentUser] Update Settings';
    static UPDATE_GUEST_ID = '[CurrentUser] Update Guest ID';
    static ALL = [
        CurrentUserActions.GET,
        CurrentUserActions.LOGIN,
        CurrentUserActions.LOGOUT,
        CurrentUserActions.RESET_PASSWORD,
        CurrentUserActions.UPDATE_SETTINGS,
        CurrentUserActions.UPDATE_GUEST_ID,
    ];

    static logout(): Action {
        return {
            type: CurrentUserActions.LOGOUT
        };
    }

    static updateGuestId(id: string): Action {
        return {
            type: CurrentUserActions.UPDATE_GUEST_ID,
            payload: id
        };
    }
}
