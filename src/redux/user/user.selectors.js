import { createSelector } from "reselect";

const userSelect = state => state.user;


export const currentUserSelector = createSelector(
    [userSelect],
    user => user.currentUser
);

