import { createTheme } from '@material-ui/core/styles';

export default createTheme({
  overrides: {
    MuiButton: {
      root: {
        margin: '0 20px 0 0',
      },
      containedPrimary: {
        backgroundColor: '#000',
        '&:hover': {
          backgroundColor: '#fff',
          color: '#000',
        },
      },
      containedSecondary: {
        backgroundColor: '#000',
        '&:hover': {
          backgroundColor: '#fff',
          color: '#000',
        },
      },
      outlinedSecondary: {
        backgroundColor: '#FFFF00',
      },
    },
    MuiFormControl: {
      root: {
        margin: '20px 0',
      },
    },
    MuiAppBar: {
      colorPrimary: {
        backgroundColor: '#000',
      },
      positionFixed: {
        position: 'relative',
      },
    },
    MuiContainer: {
      root: {
        marginLeft: '0',
        marginRight: '0',
        display: 'flex',
        '@media (min-width: 600px)': {
          paddingLeft: '16px',
          paddingRight: 0,
        },
      },
    },
    MuiPaper: {
      root: {
        backgroundColor: '#3AAFA9',
      },
    },
    MuiList: {
      padding: {
        paddingTop: '55px',
      },
    },
    MuiToolbar: {
      gutters: {
        paddingLeft: 0,
        paddingRight: 0,
        '@media (min-width: 600px)': {
          paddingLeft: 0,
          paddingRight: 0,
        },
      },
    },
  },
});
