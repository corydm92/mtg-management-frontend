import React, { useState } from 'react';
import CardsTable from './CardsTable';
import CardsTableMobile from './CardsTableMobile';
import SideBar from './SideBar';
import Grid from '@material-ui/core/Grid';
import CardsTableToolbar from './CardsTableToolbar';
import CardsTableToolbarMobile from './CardsTableToolbarMobile';
import { makeStyles } from '@material-ui/styles';
import EnhancedContainer from '../component-library/mui/components/Container';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { cardDisplay } from '../constants/tableDisplayIcons';

const useStyles = makeStyles((theme) => {
  const scrollSpace = theme.mixins.toolbar.minHeight * 2 + 3;

  return {
    grid: {
      flexWrap: 'nowrap',
    },
    mobileContainer: {
      maxHeight: `calc(100vh - ${scrollSpace}px)`,
      overflow: 'scroll',
      '&::-webkit-scrollbar': {
        display: 'none',
      },
    },
    desktopSidebar: {
      marginRight: theme.spacing(2),
    },
  };
});

const MobileTable = (props) => {
  const classes = useStyles();

  const [activeDisplay, setActiveDisplay] = useState(cardDisplay);

  const {
    // STORE
    cards,
    priceCategory,
    isLoadingCards,
    cardNamesAndSets,
    filterValues,
    priceCalc,

    // ACTIONS
    setPriceCategoryLow,
    setPriceCategoryMid,
    setPriceCategoryHigh,
    setPriceCategoryMarket,
    setFilterOptions,
    clearFilterOptions,
    setPriceCalc,
  } = { ...props };

  const handleDisplayChange = (display) => {
    setActiveDisplay(display);
  };

  return (
    <EnhancedContainer disableGutters dataTest='mobile-table-container'>
      <CardsTableToolbarMobile
        onClick={handleDisplayChange}
        activeDisplay={activeDisplay}
      />
      <EnhancedContainer
        className={classes.mobileContainer}
        dataTest='mobile-body-container'
      >
        {activeDisplay === cardDisplay ? (
          <CardsTableMobile />
        ) : (
          <SideBar
            priceCategory={priceCategory}
            setPriceCategoryLow={setPriceCategoryLow}
            setPriceCategoryMid={setPriceCategoryMid}
            setPriceCategoryHigh={setPriceCategoryHigh}
            setPriceCategoryMarket={setPriceCategoryMarket}
            cardNamesAndSets={cardNamesAndSets}
            setFilterOptions={setFilterOptions}
            clearFilterOptions={clearFilterOptions}
            filterValues={filterValues}
            priceCalc={priceCalc}
          />
        )}
      </EnhancedContainer>
    </EnhancedContainer>
  );
};

const DesktopTable = (props) => {
  const classes = useStyles();

  const {
    // STORE
    cards,
    priceCategory,
    isLoadingCards,
    cardNamesAndSets,
    filterValues,
    priceCalc,

    // ACTIONS
    setPriceCategoryLow,
    setPriceCategoryMid,
    setPriceCategoryHigh,
    setPriceCategoryMarket,
    setFilterOptions,
    clearFilterOptions,
    setPriceCalc,
  } = { ...props };

  return (
    <EnhancedContainer disableGutters dataTest='desktop-table-container'>
      <CardsTableToolbar onClick={() => {}} />
      <Grid container className={classes.grid}>
        <Grid item xs={2}>
          <SideBar
            className={classes.desktopSidebar}
            priceCategory={priceCategory}
            setPriceCategoryLow={setPriceCategoryLow}
            setPriceCategoryMid={setPriceCategoryMid}
            setPriceCategoryHigh={setPriceCategoryHigh}
            setPriceCategoryMarket={setPriceCategoryMarket}
            cardNamesAndSets={cardNamesAndSets}
            setFilterOptions={setFilterOptions}
            clearFilterOptions={clearFilterOptions}
            filterValues={filterValues}
            priceCalc={priceCalc}
          />
        </Grid>
        <Grid item xs={10}>
          <CardsTable
            cards={cards}
            isLoadingCards={isLoadingCards}
            priceCategory={priceCategory}
            filterValues={filterValues}
            setFilterOptions={setFilterOptions}
            clearFilterOptions={clearFilterOptions}
            setPriceCalc={setPriceCalc}
          />
        </Grid>
      </Grid>
    </EnhancedContainer>
  );
};

const CardsView = (props) => {
  const {
    // STORE
    cards,
    priceCategory,
    isLoadingCards,
    cardNamesAndSets,
    filterValues,
    priceCalc,

    // ACTIONS
    setPriceCategoryLow,
    setPriceCategoryMid,
    setPriceCategoryHigh,
    setPriceCategoryMarket,
    setFilterOptions,
    clearFilterOptions,
    setPriceCalc,
  } = {
    ...props,
  };

  // Returns true if viewport >= 960px
  const matches = useMediaQuery('(min-width:960px)');

  return (
    <div data-test='cardsView'>
      {!matches ? (
        <MobileTable
          priceCategory={priceCategory}
          setPriceCategoryLow={setPriceCategoryLow}
          setPriceCategoryMid={setPriceCategoryMid}
          setPriceCategoryHigh={setPriceCategoryHigh}
          setPriceCategoryMarket={setPriceCategoryMarket}
          cardNamesAndSets={cardNamesAndSets}
          setFilterOptions={setFilterOptions}
          clearFilterOptions={clearFilterOptions}
          filterValues={filterValues}
          priceCalc={priceCalc}
        />
      ) : (
        <DesktopTable
          priceCategory={priceCategory}
          setPriceCategoryLow={setPriceCategoryLow}
          setPriceCategoryMid={setPriceCategoryMid}
          setPriceCategoryHigh={setPriceCategoryHigh}
          setPriceCategoryMarket={setPriceCategoryMarket}
          cardNamesAndSets={cardNamesAndSets}
          setFilterOptions={setFilterOptions}
          clearFilterOptions={clearFilterOptions}
          filterValues={filterValues}
          priceCalc={priceCalc}
          cards={cards}
          isLoadingCards={isLoadingCards}
          setPriceCalc={setPriceCalc}
        />
      )}
    </div>
  );
};

export default CardsView;
