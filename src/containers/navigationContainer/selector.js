import { createSelector } from 'reselect';

export const NavItemsSelector = (state) => state.navigationReducer.navItems;

export const getNaveItemSelector = createSelector(
  NavItemsSelector,
  (navItems) => navItems
);