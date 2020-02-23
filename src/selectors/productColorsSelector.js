import { createSelector } from 'reselect';
import filter from 'lodash/filter';
import { productSelector } from './product/productSelector';
import { colorsSelector } from './colors/colorsSelector';

export const productColorsSelector = createSelector(
  productSelector,
  colorsSelector,
  (product, colors) =>
    filter(colors, c => product.colorChoices.includes(c.id)),
);
