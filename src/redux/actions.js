import {
  FETCH_CARDS_DATA_SUCCESSFUL,
  FETCH_CARDS_DATA_FAILED,
  FETCH_CARD_DATA_SUCCESSFUL,
  FETCH_CARD_DATA_FAILED,
  SET_CARD_DATA_SUCCESSFUL,
  SET_CARD_DATA_FAILED,
  IS_LOADING,
  SET_SPEC_PRICES_SUCCESSFUL,
  SET_TCG_PRICES_SUCCESSFUL,
  // SET_SPEC_PRICES_FAILED,
  // SET_TCG_PRICES_FAILED,
} from './actionTypes';

import { isEmpty } from 'lodash';

import axios from 'axios';
import singleResultMock from '../js/constants/singleResultMock';
import cardsNormalizr from '../normalizr/cardsNormalizr';
import cardNormalizr from '../normalizr/cardNormalizr';

const REACT_APP_BASE_API_URL = process.env.REACT_APP_BASE_API_URL;

const isLoading = (isTrue) => {
  return { type: IS_LOADING, payload: isTrue };
};

// Intermediary action creator
export const fetchCards = (params) => (dispatch) => {
  // Other operations here
  dispatch(isLoading(true));
  dispatch(fetchCardsData(params));
};

// Fetches all card data
export const fetchCardsData = (params = '/?limit=10') => (dispatch) => {
  axios
    .get(REACT_APP_BASE_API_URL + params)
    .then((res) => {
      // Input JSON (or plain JS object) data that needs normalization.
      const normalizedResponse = cardsNormalizr(res.data.results);
      dispatch({
        type: FETCH_CARDS_DATA_SUCCESSFUL,
        payload: normalizedResponse,
      });
      dispatch(isLoading(false));
    })
    .catch((err) => {
      dispatch({ type: FETCH_CARDS_DATA_FAILED, payload: err });
      dispatch(isLoading(false));
    });
};

// Intermediary action creator
export const fetchCard = (id) => (dispatch, getState) => {
  const { entities } = getState().cardsReducer;
  const singleCardId = getState().cardReducer.id; // Gets ID from card in cardReducer

  if (isEmpty(entities)) {
    dispatch(fetchCardsData()); // Fetch all cards to populate main view, ie if user refreshes the page on single view we should fetch all cards for main view
    dispatch(fetchSingleCard(id)); // Fetch the single card, for single view
  } else if (toString(singleCardId) !== toString(id)) {
    // Set the single card if we do not have that card in memory
    dispatch(setSingleCard(id));
  }
};

export const fetchSingleCard = (id) => (dispatch) => {
  axios
    .get(REACT_APP_BASE_API_URL + '/' + id + '/')
    .then((res) => {
      const normalizedResponse = cardNormalizr(res.data);
      const result = normalizedResponse.result;

      const cardEntity = normalizedResponse.entities.card[result]; // Just the object, no need for a pointer
      const specPricesEntity = normalizedResponse.entities.spec_prices;
      const tcgPriceEntity = normalizedResponse.entities.tcg_price;

      dispatch({
        type: FETCH_CARD_DATA_SUCCESSFUL,
        payload: cardEntity,
      });
      dispatch(setSpecPricesSuccessful(specPricesEntity));
      dispatch(setTcgPricesSuccessful(tcgPriceEntity));
    })
    .catch((error) => {
      dispatch({ type: FETCH_CARD_DATA_FAILED, payload: error });
      dispatch(isLoading(false));
    });
};

export const setSingleCard = (singleId) => (dispatch, getState) => {
  try {
    const singleCard = getState().cardsReducer.entities.cards[singleId]; // Get the card from local state
    const normalizedResponse = cardNormalizr(singleCard); // Normalize
    const result = normalizedResponse.result; // Get the id of the card

    const cardEntity = normalizedResponse.entities.card[result]; // Just the object, no need for a pointer
    const specPricesEntity = normalizedResponse.entities.spec_prices;
    const tcgPriceEntity = normalizedResponse.entities.tcg_price;

    dispatch({ type: SET_CARD_DATA_SUCCESSFUL, payload: cardEntity });
    dispatch(setSpecPricesSuccessful(specPricesEntity));
    dispatch(setTcgPricesSuccessful(tcgPriceEntity));
  } catch (error) {
    dispatch({ type: SET_CARD_DATA_FAILED, payload: error });
  }
};

export const setSpecPricesSuccessful = (specPrices) => {
  return { type: SET_SPEC_PRICES_SUCCESSFUL, payload: specPrices };
};

export const setTcgPricesSuccessful = (tcgPrices) => {
  return { type: SET_TCG_PRICES_SUCCESSFUL, payload: tcgPrices };
};

// Might be useful in the future
// export const setSpecPricesFailed = () => {
//   return { type: SET_SPEC_PRICES_FAILED };
// };

// Might be useful in the future
// export const setTcgPricesFailed = () => {
//   return { type: SET_TCG_PRICES_FAILED };
// };
