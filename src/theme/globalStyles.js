// @mui
import { alpha } from '@mui/material';
import { createStyles, GlobalStyles as MUIGlobalStyles, makeStyles } from '@mui/material';

// ----------------------------------------------------------------------

export default function GlobalStyles() {
  const inputGlobalStyles = (
    <MUIGlobalStyles
      styles={(theme) => ({
        '*': {
          boxSizing: 'border-box',
        },
        html: {
          margin: 0,
          padding: 0,
          width: '100%',
          height: '100%',
          WebkitOverflowScrolling: 'touch',
        },
        body: {
          margin: 0,
          padding: 0,
          width: '100%',
          height: '100%',
          '&::-webkit-scrollbar': {
            width: 5,
            borderRadius: 5,
          },
          '&::-webkit-scrollbar-track': {
            backgroundColor: theme.palette.grey[200],
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: alpha(theme.palette.primary.main, 0.8),
            borderRadius: 10,
          },
        },
        '#__next': {
          width: '100%',
          height: '100%',
        },
        input: {
          '&[type=number]': {
            MozAppearance: 'textfield',
            '&::-webkit-outer-spin-button': {
              margin: 0,
              WebkitAppearance: 'none',
            },
            '&::-webkit-inner-spin-button': {
              margin: 0,
              WebkitAppearance: 'none',
            },
          },
          '&::-webkit-scrollbar': {
            width: 5,
            borderRadius: 5,
          },
          '&::-webkit-scrollbar-track': {
            backgroundColor: theme.palette.grey[200],
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: alpha(theme.palette.primary.main, 0.6),
            borderRadius: 10,
          },
        },
        textArea: {
          '&::-webkit-scrollbar': {
            width: 5,
            borderRadius: 5,
          },
          '&::-webkit-scrollbar-track': {
            backgroundColor: theme.palette.grey[200],
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: alpha(theme.palette.primary.main, 0.6),
            borderRadius: 10,
          },
        },
        img: {
          display: 'block',
          maxWidth: '100%',
        },
        ul: {
          margin: 0,
          padding: 0,
        },
        a: {
          cursor: 'pointer',
        },
      })}
    />
  );

  return inputGlobalStyles;
}

// &::-webkit-scrollbar {
//     width: 6px;
//     // border-radius: 5px;
// }

// &::-webkit-scrollbar-track {
//     background-color: rgb(236, 236, 236);
// }

// &::-webkit-scrollbar-thumb {
//     background-color: rgb(221, 221, 221);
//     background-color: $justLendGreen;
//     border-radius: 10px;
// }

// &::-webkit-scrollbar-track-piece {
//     background-color: transparent;
// }

// &::-webkit-scrollbar-button {
//     background-color: transparent;
// }
