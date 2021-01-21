import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';


export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    }, 
    link: {
      color: "white",
      "&:visited": {
        color: 'unset',
      },
      textDecoration: "unset",
    },
    header: {
      display: "flex",
      justifyContent: "space-between"
    },
    connectButton: {
      transition: 'all 0.1s',
      borderBottom: '3px solid #828282',
      textShadow: "0px -1px #828282",
      "&.active": {
        translate: "(0px, 5px)",
        borderBottom: "1px solid"
      }
    },
    vectorLogo: {
      width: 18,
      height: 18,
      marginTop: '5px'
    },
    addressContainer: {
      display: "flex",
      flexDirection: "row"
    }
  }),
);

export default useStyles