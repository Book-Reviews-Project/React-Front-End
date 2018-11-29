import { createSelector } from 'reselect';

export const NavItemsSelector = (state) => state.navigationReducer.navItems;

export const getNavItemSelector = createSelector(
  NavItemsSelector,
  (navItems) => navItems
);

export const TokenSelector = (state) => state.root.user.token;

export const getTokenSelector = createSelector(
  TokenSelector,
  (token) => token
);