import React from 'react';
import Container from '../component-library/mui/components/Container';
import EnhancedTooltip from '../component-library/mui/components/Tooltip';
import SvgIcon from '@material-ui/core/SvgIcon';
import { makeStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom';
import { formatCardKingdomBuylistLink, formatEdhrecLink } from '../../utils';

const useStyles = makeStyles((theme) => {
  return {
    root: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fill: theme.palette.custom.blue,
    },
    star: {
      width: (props) => `${29 * props.scaleSize}px`,
      height: (props) => `${29 * props.scaleSize}px`,
      fill: theme.palette.custom.gold,
    },
    tcgListing: {
      width: (props) => `${19 * props.scaleSize}px`,
      height: (props) => `${19 * props.scaleSize}px`,
      paddingLeft: (props) => `${props.foil ? 5 * props.scaleSize : 0}px`,
    },
    cardKingdom: {
      width: (props) => `${25 * props.scaleSize}px`,
      height: (props) => `${25 * props.scaleSize}px`,
      paddingLeft: (props) => `${10 * props.scaleSize}px`,
    },
    edhRec: {
      width: (props) => `${29 * props.scaleSize}px`,
      height: (props) => `${29 * props.scaleSize}px`,
      paddingLeft: (props) => `${10 * props.scaleSize}px`,
    },
    tcgStore: {
      width: (props) => `${58 * props.scaleSize}px`,
      height: (props) => `${22 * props.scaleSize}px`,
      paddingLeft: (props) => `${10 * props.scaleSize}px`,
    },
    container: {
      display: 'flex',
      alignItems: 'center',
    },
    iconHolder: {
      paddingTop: theme.spacing(1),
    },
  };
});

const IconHolder = (props) => {
  const classes = useStyles(props);
  const { foil, originalCardName, setName, tcgUrl, tcgSellerDashboardUrl } = {
    ...props,
  };

  return (
    <Container
      classes={{ root: classes.container }}
      className={classes.iconHolder}
      disableGutters
      dataTest='IconHolder'
    >
      {/* STAR ICON */}

      {foil ? (
        <EnhancedTooltip title='Foil'>
          <SvgIcon
            component='div'
            className={`${classes.root} ${classes.star}`}
            data-test='foil-icon'
          >
            <svg
              className={`${classes.root} ${classes.star}`}
              viewBox='0 0 24 24'
              height='29px'
              width='29px'
            >
              <path d='M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z' />
            </svg>
          </SvgIcon>
        </EnhancedTooltip>
      ) : null}

      {/* TCG LISTING ICON */}

      <EnhancedTooltip title='TCG Player Listings'>
        <Link to={{ pathname: tcgUrl }} target='_blank'>
          <SvgIcon
            component='div'
            className={`${classes.root} ${classes.tcgListing}`}
            data-test='tcg-icon'
          >
            <svg height='23px' width='23px' viewBox='0 0 10.399999 12'>
              <path d='m4.22 0.8h-2.5536c-0.4496 0-0.8 0.3576-0.8 0.8v8.8c0 0.4424 0.3584 0.8 0.8 0.8h7.0672c0.4496 0 0.8-0.3576 0.8-0.8v-8.8c9e-7 -0.4424-0.3584-0.8-0.8-0.8h-1.4896l0.5472 2.52c0.025596 0.0768-0.00804 0.14-0.1008 0.188-0.0672 0.0352-0.1472 0.0528-0.24 0.0528-0.041604 0-0.072 0-0.092796-4e-3l-2.2712 0.9552 0.656 3.2432c0.020004 0.051204 0.00804 0.099204-0.036 0.144-0.0432 0.044796-0.1096 0.075204-0.1968 0.0912-0.051996 0.00636-0.087996 0.0096-0.108 0.0096-0.1496 0-0.2584-0.039996-0.3256-0.12l-2.444-3.9624c-0.056-0.0776-0.0384-0.148 0.0544-0.212 0.0776-0.048 0.1648-0.072 0.264-0.072 0.02 0 0.0504 0.0032 0.092 0.0096l2.1968-1.128-1.02-1.7152zm-4.22 0.005604c0-0.4456 0.3576-0.8056 0.8-0.8056h8.8c0.4424 0 0.8 0.36 0.8 0.8056v10.389c0 0.4456-0.3576 0.8056-0.8 0.8056h-8.8c-0.4424 0-0.8-0.36-0.8-0.8056z' />
            </svg>
          </SvgIcon>
        </Link>
      </EnhancedTooltip>

      {/* CARD KINGDOM ICON */}

      <EnhancedTooltip title='CardKingdom Buylist'>
        <Link
          to={{ pathname: formatCardKingdomBuylistLink(originalCardName) }}
          target='_blank'
        >
          <SvgIcon
            component='div'
            className={`${classes.root} ${classes.cardKingdom}`}
            data-test='cardkingdom-icon'
          >
            <svg height='25px' width='25px' viewBox='0 0 3.7041667 3.1750001'>
              <g transform='translate(0 -293.82)'>
                <path d='m0 293.82v1.1592h0.52042v2.0158h2.6633v-2.0158h0.52042v-1.1592h-0.57636v1.0908h-0.49196v-1.084h-0.54839v1.084h-0.47074v-1.084h-0.54839v1.084h-0.49196v-1.0908z' />
              </g>
            </svg>
          </SvgIcon>
        </Link>
      </EnhancedTooltip>

      {/* EDHREC ICON */}

      <EnhancedTooltip title='EDHREC'>
        <Link
          to={{ pathname: formatEdhrecLink(originalCardName) }}
          target='_blank'
        >
          <SvgIcon
            component='div'
            className={`${classes.root} ${classes.edhRec}`}
            data-test='edhrec-icon'
          >
            <svg height='29px' width='29px' viewBox='0 0 777.000000 582.000000'>
              <g
                transform='translate(0.000000,582.000000) scale(0.100000,-0.100000)'
                stroke='none'
              >
                <path
                  d='M0 2910 l0 -2910 3885 0 3885 0 0 2910 0 2910 -3885 0 -3885 0 0
-2910z m3063 2516 c99 -44 167 -157 167 -276 0 -56 -21 -116 -60 -170 -11 -15
-20 -35 -20 -43 0 -14 21 -69 65 -172 20 -46 43 -101 61 -142 9 -21 22 -51 30
-66 8 -16 14 -33 14 -38 0 -4 11 -32 24 -61 14 -29 43 -98 66 -153 23 -55 46
-104 51 -110 5 -5 9 -19 9 -31 0 -12 6 -27 14 -34 8 -6 16 -24 18 -38 4 -36
32 -39 88 -8 25 14 99 52 166 86 l121 61 139 -72 c76 -39 144 -75 149 -79 6
-4 25 -11 43 -15 30 -6 33 -5 38 24 4 17 13 36 20 42 8 6 14 17 14 24 0 11 36
103 75 190 8 17 21 48 30 70 9 22 23 55 31 73 38 87 46 104 59 137 37 87 48
112 61 138 8 16 14 33 14 38 0 5 11 32 25 61 31 64 31 74 2 118 -111 167 -49
384 131 453 52 21 120 21 146 2 11 -8 26 -15 34 -15 25 0 92 -61 114 -104 70
-138 50 -277 -56 -381 -39 -39 -78 -56 -138 -63 -60 -7 -62 -8 -85 -51 -13
-24 -23 -51 -23 -59 0 -7 -6 -26 -14 -40 -20 -39 -76 -173 -76 -183 0 -5 -13
-37 -29 -71 -15 -35 -43 -99 -61 -143 -31 -77 -43 -106 -74 -177 -61 -143 -69
-168 -56 -183 7 -8 20 -15 29 -15 9 0 21 -4 27 -10 5 -5 63 -37 129 -71 66
-33 128 -68 138 -77 16 -14 17 -79 17 -1084 0 -916 -2 -1068 -14 -1068 -12 0
-60 23 -166 79 -8 4 -26 14 -40 21 -25 13 -161 84 -435 224 -82 43 -154 82
-159 87 -13 12 -69 12 -82 -1 -5 -5 -66 -38 -134 -73 -69 -35 -188 -97 -265
-137 -272 -143 -387 -200 -401 -200 -12 0 -14 161 -12 1077 l3 1077 165 83
c90 46 168 87 174 93 8 8 -9 62 -56 170 -30 67 -44 100 -63 150 -18 47 -27 67
-69 162 -15 31 -26 60 -26 63 0 10 -88 220 -116 278 -8 16 -14 35 -14 42 0 20
-26 31 -89 39 -59 8 -90 24 -141 75 -47 48 -68 89 -79 163 -22 134 37 248 161
310 67 34 119 35 191 4z m858 -68 c1 -7 0 -50 -1 -95 -1 -74 0 -82 19 -88 11
-3 33 0 48 8 16 8 53 22 83 30 120 35 299 92 368 119 127 49 140 33 25 -30
-43 -23 -105 -58 -138 -77 -33 -18 -80 -45 -105 -58 -25 -14 -61 -34 -80 -46
-19 -11 -42 -24 -50 -28 -8 -3 -17 -10 -20 -14 -6 -8 -101 -62 -156 -87 -23
-11 -45 -25 -48 -31 -4 -6 -14 -11 -22 -11 -12 0 -15 11 -12 53 1 28 1 73 0
100 -2 56 -7 57 -107 21 -38 -14 -90 -29 -115 -33 -44 -9 -99 -26 -130 -41 -9
-4 -30 -11 -49 -15 -18 -4 -44 -13 -59 -21 -15 -8 -36 -14 -47 -14 -11 -1 -31
-7 -45 -15 -29 -16 -60 -19 -60 -6 0 11 12 18 135 80 44 22 89 46 100 53 73
46 149 90 168 98 12 6 29 14 37 20 61 40 237 140 248 140 6 0 12 -6 13 -12z
m-1221 -2545 c1 -969 -1 -1348 -8 -1355 -5 -5 -51 -30 -103 -57 -52 -27 -177
-91 -279 -143 -209 -108 -455 -235 -576 -298 -49 -25 -89 -40 -98 -37 -15 6
-16 69 -16 708 l1 701 24 22 c14 13 73 47 132 76 60 28 115 56 123 61 8 5 51
27 95 49 372 190 655 336 661 343 4 4 16 7 26 7 16 0 18 -9 18 -77z m2496 15
c197 -102 508 -262 702 -360 101 -51 195 -103 208 -115 l24 -22 0 -706 c-1
-819 17 -735 -138 -653 -120 63 -325 169 -587 303 -110 56 -234 120 -275 142
l-75 39 -5 640 c-6 722 -4 794 14 794 8 0 67 -28 132 -62z m-1276 -1162 c14
-8 61 -33 105 -55 106 -56 288 -151 460 -241 77 -41 181 -95 230 -121 50 -26
115 -60 145 -76 30 -16 143 -75 250 -130 107 -55 222 -115 255 -133 33 -18
119 -63 190 -100 72 -37 155 -80 185 -97 30 -17 141 -74 245 -129 105 -54 231
-119 280 -146 50 -26 100 -52 113 -58 13 -5 20 -14 17 -20 -9 -14 -5031 -14
-5040 0 -3 6 4 15 17 20 13 6 77 39 143 74 66 34 178 93 248 130 70 36 167 87
215 113 48 25 155 80 237 123 83 42 170 89 195 102 25 14 110 59 190 101 80
41 183 95 230 119 47 25 131 70 188 99 57 30 156 82 220 115 64 34 167 87 227
118 108 55 196 100 225 117 59 33 178 89 190 89 8 0 26 -7 40 -14z'
                />
              </g>
            </svg>
          </SvgIcon>
        </Link>
      </EnhancedTooltip>

      {/* TCG STORE ICON */}

      <EnhancedTooltip title='TCG Player Seller Portal'>
        <Link to={{ pathname: tcgSellerDashboardUrl }} target='_blank'>
          <SvgIcon
            component='div'
            className={`${classes.root} ${classes.tcgStore}`}
            data-test='tcgstore-icon'
          >
            <svg width='58px' viewBox='0 0 300.000000 111.000000'>
              <g
                transform='translate(0.000000,111.000000) scale(0.050000,-0.050000)'
                stroke='none'
              >
                <path d='M2168 2157 c-8 -13 -13 -65 -11 -117 l4 -94 -375 -98 c-458 -120 -462 -123 -420 -269 18 -59 30 -108 28 -109 -130 -61 -537 -310 -545 -334 -10 -30 16 -96 67 -172 40 -60 85 -5 54 68 -25 62 -25 68 6 70 21 1 24 5 9 11 -14 6 17 39 75 79 105 72 339 197 348 185 10 -14 52 -172 52 -195 0 -17 -11 -18 -39 -3 -21 12 -103 21 -182 21 l-143 0 14 -75 c24 -129 41 -145 151 -145 55 0 131 -13 170 -29 40 -17 69 -21 69 -9 0 11 9 15 20 8 46 -29 56 15 26 115 -112 369 -135 578 -67 614 31 17 354 108 469 132 20 4 72 26 115 48 103 54 100 68 93 -450 l-6 -437 485 5 485 4 0 -161 c0 -93 -8 -160 -20 -160 -11 0 -20 -49 -20 -110 l0 -110 95 0 95 0 79 215 c43 118 91 241 106 272 l28 57 189 -7 188 -7 0 447 c0 417 2 447 35 437 19 -5 169 -46 332 -90 164 -44 307 -90 318 -101 24 -24 -1 -167 -77 -443 -28 -104 -53 -203 -55 -219 -4 -37 65 -53 75 -17 4 14 32 118 63 231 l56 205 61 -46 c34 -26 135 -89 225 -141 173 -100 200 -132 166 -195 -21 -38 -11 -78 18 -78 33 0 100 150 82 183 -10 18 -136 99 -280 180 -243 137 -260 151 -250 197 40 174 38 192 -22 216 -50 20 -544 157 -691 192 -50 11 -54 21 -60 127 l-6 115 -834 5 c-617 4 -837 -1 -848 -18z m1521 -58 c-6 -11 -265 -60 -496 -95 -112 -16 -123 -41 -41 -84 32 -17 116 -60 186 -97 150 -78 162 -65 -183 -206 -295 -121 -287 -105 -145 -271 63 -75 104 -139 96 -153 -7 -13 2 -11 20 4 35 29 50 175 15 154 -10 -6 -25 -1 -33 12 -9 14 -6 18 9 9 13 -8 24 -3 25 12 1 20 3 20 11 1 6 -14 19 -20 29 -14 11 7 10 26 -2 48 -21 40 7 61 81 61 20 0 50 19 66 42 17 23 40 36 51 29 12 -7 22 -4 22 6 0 11 19 26 43 34 30 10 35 18 17 29 -18 11 -13 20 19 30 26 8 40 25 33 41 -6 15 9 42 33 58 36 26 38 31 9 31 -21 0 -34 15 -34 40 0 22 9 40 20 40 11 0 20 9 20 19 0 11 -14 15 -30 8 -24 -9 -27 -2 -13 35 9 25 29 49 45 53 22 6 22 3 -2 -15 -25 -20 -23 -22 10 -10 22 7 49 15 60 16 11 2 27 13 35 24 10 13 21 10 33 -7 23 -37 46 2 29 50 -11 31 -8 33 15 11 42 -39 54 -886 12 -920 -21 -18 -214 -23 -766 -19 l-738 5 -6 380 c-3 209 0 410 6 446 l12 66 71 -71 c62 -62 113 -83 173 -73 10 2 11 -6 4 -18 -7 -11 -23 -14 -36 -6 -14 8 -12 -1 3 -20 15 -18 34 -30 41 -25 8 5 27 0 43 -10 22 -14 18 -18 -19 -19 -46 0 -46 -2 -15 -37 39 -43 23 -111 -22 -94 -19 8 -26 2 -19 -16 6 -16 3 -36 -7 -46 -12 -12 5 -46 40 -88 33 -38 60 -78 60 -89 1 -12 35 -39 76 -60 41 -22 80 -47 86 -55 7 -9 31 -20 54 -24 23 -5 61 -18 84 -30 22 -12 41 -17 41 -11 0 7 11 5 25 -4 30 -19 115 -23 115 -6 0 13 -201 165 -365 277 -120 82 -123 75 65 193 87 55 159 105 159 110 0 6 -140 77 -310 159 -170 81 -309 153 -309 160 0 6 314 11 698 11 384 1 695 -4 691 -11z m-2343 -961 c58 -30 154 -120 154 -145 0 -11 -22 1 -49 26 -27 26 -84 68 -125 93 -77 47 -61 67 20 26z' />
                <path d='M1995 1590 c12 -149 -17 -181 -115 -123 -82 48 -88 41 -39 -38 56 -91 40 -105 -121 -113 l-130 -6 106 -56 c132 -69 149 -106 75 -165 l-56 -44 68 -10 c37 -5 82 -15 100 -23 28 -13 30 -5 12 63 -32 119 -6 211 86 293 43 40 75 72 70 72 -6 0 -2 21 8 47 18 47 -32 233 -62 233 -7 0 -8 -58 -2 -130z' />
                <path d='M4121 1634 c-14 -42 -59 -94 -125 -143 -58 -43 -94 -82 -80 -86 13 -5 19 -17 13 -26 -6 -10 -5 -75 3 -143 l14 -125 27 78 c50 144 127 196 128 86 0 -36 13 -87 29 -115 16 -27 29 -79 29 -115 1 -90 85 -94 130 -6 65 124 32 320 -39 241 -51 -57 -72 -30 -39 50 37 87 37 192 1 278 -40 95 -65 102 -91 26z' />
                <path d='M1983 1314 c-45 -54 -60 -187 -28 -252 35 -72 76 -85 52 -17 -27 74 -16 212 20 270 20 33 -16 32 -44 -1z' />
                <path d='M4653 1247 c-7 -8 -13 -32 -13 -55 -1 -35 -4 -37 -20 -12 -17 27 -20 27 -22 0 -5 -59 -9 -71 -34 -120 -23 -43 -19 -41 24 10 28 33 73 83 101 111 28 28 51 57 51 65 0 18 -69 18 -87 1z' />
                <path d='M4755 1135 c-17 -25 -53 -70 -82 -100 l-51 -55 58 0 c41 0 66 14 82 45 12 25 46 70 74 100 l51 55 -51 0 c-31 0 -63 -18 -81 -45z' />
                <path d='M4880 1040 c-41 -58 -41 -60 -4 -60 35 0 79 37 112 95 31 54 -67 23 -108 -35z' />
                <path d='M59 930 c-1 -5 -2 -93 -3 -195 l-1 -185 112 -6 113 -6 0 -137 c0 -120 -5 -138 -40 -147 -34 -9 -40 -27 -40 -122 l0 -112 250 0 250 0 0 124 0 123 74 -86 c141 -165 585 -233 665 -102 8 12 43 5 92 -18 97 -48 -78 -45 2404 -43 l2025 2 0 120 c0 106 -5 120 -40 120 -67 0 -131 150 -91 211 121 185 -3 427 -233 455 -48 6 -539 4 -1093 -3 l-1006 -13 -91 -240 c-115 -303 -106 -293 -254 -286 l-122 6 -6 145 c-5 117 0 148 25 157 23 9 31 41 31 120 l0 108 -240 0 c-138 0 -240 -8 -240 -19 0 -12 -22 -12 -55 -2 -155 49 -897 42 -998 -10 -115 -58 -107 -56 -107 -20 0 80 -385 88 -510 11 l-70 -43 0 51 0 52 -400 0 c-220 0 -401 -4 -401 -10z m741 -190 l0 -120 -70 0 c-54 0 -70 8 -70 36 0 42 -37 84 -74 84 -50 0 -36 -534 14 -550 22 -7 40 -30 40 -51 0 -36 -15 -39 -180 -39 -191 0 -220 17 -140 85 57 49 52 555 -5 555 -24 0 -40 -20 -48 -60 -10 -52 -20 -60 -79 -60 l-68 0 0 120 0 120 340 0 340 0 0 -120z m535 107 c39 -10 45 -25 45 -109 l0 -98 -68 0 c-55 0 -70 9 -80 48 -22 90 -136 75 -174 -22 -92 -241 76 -630 172 -399 48 114 150 83 150 -47 0 -110 -7 -115 -180 -133 -272 -29 -431 155 -390 453 34 247 259 379 525 307z m603 1 c59 -12 62 -17 62 -110 l0 -98 -68 0 c-56 0 -70 9 -80 50 -18 72 -137 72 -184 0 -103 -158 -16 -568 100 -471 41 33 42 153 2 168 -103 40 -29 93 130 93 159 0 233 -53 130 -93 -23 -8 -30 -45 -30 -147 0 -139 -61 -207 -125 -143 -13 13 -38 13 -73 0 -216 -82 -421 131 -398 414 23 276 219 399 534 337z m631 -36 c204 -85 110 -389 -129 -422 l-100 -14 0 -86 c0 -58 10 -89 30 -97 17 -7 30 -30 30 -52 0 -38 -12 -41 -170 -41 -168 0 -244 47 -140 87 45 17 45 573 0 573 -28 0 -42 61 -19 84 21 22 433 -5 498 -32z m447 4 c4 -18 -12 -43 -35 -55 -38 -21 -41 -40 -41 -282 l0 -259 60 0 c45 0 67 13 84 50 63 138 166 34 123 -125 -18 -67 -527 -71 -527 -4 0 22 14 45 30 52 45 17 45 567 0 567 -27 0 -43 61 -21 83 29 28 321 4 327 -27z m810 -286 c54 -176 110 -327 126 -336 93 -52 30 -94 -142 -94 -175 0 -219 27 -141 88 65 50 15 132 -82 132 -99 0 -167 -86 -98 -125 88 -49 35 -95 -109 -95 -152 0 -182 29 -100 97 22 18 84 150 138 293 54 143 108 285 120 316 20 51 30 56 107 50 l84 -6 97 -320z m366 304 c8 -8 3 -36 -11 -62 -27 -50 28 -255 58 -218 42 50 88 194 66 201 -93 31 -21 99 105 99 129 1 196 -64 102 -100 -109 -42 -267 -528 -182 -561 17 -7 30 -30 30 -52 0 -38 -12 -41 -170 -41 -168 0 -244 47 -140 87 82 32 -79 573 -170 573 -11 0 -20 21 -20 47 0 47 289 71 332 27z m944 -92 c7 -121 -85 -157 -132 -52 -18 40 -38 50 -94 50 l-70 0 0 -100 c0 -107 62 -149 90 -60 33 103 130 36 130 -90 0 -126 -97 -193 -130 -90 -30 93 -90 46 -90 -70 l0 -110 72 0 c61 0 75 9 94 60 30 79 168 94 147 15 -7 -25 -13 -79 -13 -120 l0 -75 -280 0 c-299 0 -343 20 -250 113 23 23 30 84 30 279 0 203 -6 251 -30 261 -27 10 -42 69 -22 89 5 4 129 7 275 5 l267 -3 6 -102z m531 76 c138 -38 175 -246 59 -337 -47 -38 -49 -44 -21 -76 17 -19 49 -72 72 -118 23 -45 55 -87 72 -94 89 -34 32 -93 -88 -93 l-119 0 -76 144 c-93 176 -126 194 -126 68 0 -70 9 -98 40 -117 97 -60 50 -95 -130 -95 -168 0 -244 47 -140 87 25 10 30 61 30 292 0 236 -5 281 -30 281 -27 0 -43 60 -22 82 16 16 403 -3 479 -24z' />
                <path d='M2339 735 c-31 -176 1 -258 82 -214 85 45 37 219 -60 219 -11 0 -21 -2 -22 -5z' />
                <path d='M3562 534 c-34 -87 -28 -114 28 -114 56 0 60 23 22 110 l-27 60 -23 -56z' />
                <path d='M5440 631 c0 -122 14 -140 88 -112 68 26 77 166 13 200 -82 44 -101 28 -101 -88z' />
              </g>
            </svg>
          </SvgIcon>
        </Link>
      </EnhancedTooltip>
    </Container>
  );
};

export default IconHolder;
