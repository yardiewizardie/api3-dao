import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';


export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      //marginLeft: "13px",
      display: "flex",
      flexDirection: "column"
      // border: "1px solid rgb(221, 228, 233)",
      // color:  "unset",
      // backgroundColor: "rgb(221, 228, 233)",
    },
  }),
);

export default useStyles