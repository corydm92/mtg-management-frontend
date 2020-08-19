import React, { useEffect } from 'react';
import { isEmpty } from 'lodash';
import CardsTable from './CardsTable';

const CardsView = (props) => {
  const {
    cards,
    fetchCards,
    isLoadingCards,
    isLoadingCardsFalse,
    priceCategory,
  } = {
    ...props,
  };

  useEffect(() => {
    fetchCards();
  }, [fetchCards]);

  useEffect(() => {
    if (!isEmpty(cards) && isLoadingCards) {
      isLoadingCardsFalse();
    }
  }, [cards, isLoadingCards, isLoadingCardsFalse]);

  return (
    <div data-test='cardsView'>
      <div>Cards Container</div>
      <CardsTable
        cards={cards}
        isLoadingCards={isLoadingCards}
        priceCategory={priceCategory}
      />
    </div>
  );
};

export default CardsView;
