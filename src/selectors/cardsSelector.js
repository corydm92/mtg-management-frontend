import { createSelector } from 'reselect';
import {
  getCardQuantity,
  getAvgPurchasePrice,
  gainLossCalc,
  getPriceSpread,
  roundTwoDecimals,
  cardIsValid,
  filterByReducer,
} from '../utils';

const getCards = (state) => state.cardsReducer.entities.cards;
const getCardsResults = (state) => state.cardsReducer.result;
const getTcgPriceCategory = (state) => state.tcgPriceCategory;
const getFilterCategories = (state) => state.filterReducer;

export const cardsSelector = createSelector(
  [getCards, getCardsResults, getTcgPriceCategory, getFilterCategories],
  (cards, results, priceCategory, filterCategories) => {
    return results.reduce((res, result) => {
      const card = { ...cards[result] };

      const isValid = cardIsValid(card);

      if (!isValid) {
        console.error(card);
        // Reduce allows us to filter invalid cards by returning our current res
        // This will be refactored to happen in the action, allowing us to display incomplete data
        return res;
      }

      const tcgSellerDashboardUrl = `https://store.tcgplayer.com/admin/product/manage/${card.tcg_productId}`;

      const avgPurchasePrice = getAvgPurchasePrice(card.spec_prices);
      const tcgPrice = roundTwoDecimals(
        parseFloat(card.tcg_price[priceCategory]) // Necessary, returns from DB as string
      );
      const gainLoss = gainLossCalc(tcgPrice, avgPurchasePrice);
      const spread = getPriceSpread(tcgPrice, avgPurchasePrice);

      const dateRange = card.spec_prices
        .reduce((acc, price) => {
          acc.push(price.date_purchased);
          return acc;
        }, [])
        .sort();

      const outObj = {
        cardName: card.card_name,
        foil: card.foil,
        language: card.language,
        setName: card.set_name,
        tcgUrl: card.tcg_url,
        tcgImageUrl: card.tcg_imageUrl,
        tcgSellerDashboardUrl,
        spread,
        quantity: getCardQuantity(card.spec_prices),
        avgPurchasePrice,
        tcgPrice,
        gainLoss,
        dateFrom: dateRange[0],
        dateTo: dateRange[dateRange.length - 1],
      };

      if (filterByReducer(filterCategories, outObj)) {
        res.push(outObj);
      }

      return res;
    }, []);
  }
);

export const cardNamesAndSets = createSelector(
  [getCards, getCardsResults],
  (cards, results) =>
    results.map((result) => {
      const card = { ...cards[result] };

      return { name: card.card_name, set: card.set_name };
    })
);
