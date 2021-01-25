import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';


export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    box: {
      padding: 10
    },
  }),
);

export default useStyles;