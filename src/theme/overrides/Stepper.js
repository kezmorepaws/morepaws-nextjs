// ----------------------------------------------------------------------

export default function Stepper(theme) {
  return {
    MuiStepConnector: {
      styleOverrides: {
        root: {
          [theme.breakpoints.down('md')]: {
            marginBottom: 25,
          },
          line: {
            borderColor: theme.palette.divider,
          },
        },
      },
    },
    MuiStepIcon: {
      styleOverrides: {
        root: {
          fill: theme.palette.grey[400],
          '&.Mui-completed': {
            fill: theme.palette.success.main,
          },
          '&.Mui-active': {
            fill: theme.palette.primary.main,
          },
          '& .MuiStepIcon-text': {
            fontWeight: 700,
            marginBottom: -1,
          },
        },
      },
    },
    MuiStepLabel: {
      styleOverrides: {
        root: {
          [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          },
        },
        iconContainer: {
          [theme.breakpoints.down('md')]: {
            paddingRight: 0,
            marginBottom: 8,
            width: 'max-content',
          },
        },
        label: {
          [theme.breakpoints.down('md')]: {
            textAlign: 'center',
          },
        },
      },
    },
  };
}
