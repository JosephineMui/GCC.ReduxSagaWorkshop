import { createSelector } from 'reselect';

export const totalPriceSelector = createSelector(
  state => state.selectedChoices,
  state => state.colors,
  (selectedChoices, colors) => {
    const { colorId, quantity } = selectedChoices;
    if (colorId && quantity) {
      const selectedColor = colors[colorId];
      return selectedColor.price * quantity;
    }
    return 0;
  }
);