import {
  categoryIcon,
  heartIcon,
  homeIcon,
  homeActiveIcon,
  moreVerticalIcon,
  categoryActiveIcon,
} from '../assets/icons';

export const tabScreensMap = {
  home: 'homeStack',
  categories: 'categoriesStack',
  favourite: 'favouriteStack',
  more: 'moreStack',
};

export const routeLabel = {
  [tabScreensMap.home]: 'Home',
  [tabScreensMap.categories]: 'Categories',
  [tabScreensMap.favourite]: 'Favourite',
  [tabScreensMap.more]: 'More',
};

export const tabIcon = {
  [tabScreensMap.home]: homeIcon,
  [tabScreensMap.categories]: categoryIcon,
  [tabScreensMap.favourite]: heartIcon,
  [tabScreensMap.more]: moreVerticalIcon,
};

export const tabIconActive = {
  [tabScreensMap.home]: homeActiveIcon,
  [tabScreensMap.categories]: categoryActiveIcon,
  [tabScreensMap.favourite]: heartIcon,
  [tabScreensMap.more]: moreVerticalIcon,
};

export const routeIcons = {
  [tabScreensMap.home]: 'Icon',
  [tabScreensMap.categories]: 'Icon',
  [tabScreensMap.favourite]: 'Icon',
  [tabScreensMap.more]: 'Icon',
};

export const Screens = {
  PRODUCT_DETAIL: 'ProductDetail',
  SHOPPING: 'Shopping',
};
