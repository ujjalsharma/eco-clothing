import { UserTypes } from "./user.types";

export const setCurrentUser = user => ({
    type: UserTypes.SET_CURRENT_USER,
    payload: user
    
});