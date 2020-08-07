import cardsReducer, { initState } from '../../../redux/reducers/cardsReducer';
import { FETCH_CARDS_DATA_SUCCESSFUL } from '../../../redux/actionTypes';
import multiResultsMock from '../../../js/constants/multiResultsMock';

const mockCardsReducer = { ...multiResultsMock.cardsReducer };

describe('Cards Reducer Test', () => {
  it('should return the initial state', () => {
    expect(cardsReducer(undefined, {})).toEqual(initState);
  });

  it('Should store payload', () => {
    expect(
      cardsReducer(
        {},
        {
          type: FETCH_CARDS_DATA_SUCCESSFUL,
          payload: mockCardsReducer,
        }
      )
    ).toEqual(mockCardsReducer);
  });
});