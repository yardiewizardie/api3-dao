import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';


export const useCommonStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    textBackground: {
        position: "absolute",
        color: "#191919",
        zIndex: -20,
        fontSize: 131,
        fontWeight: 500
    },
    borderContainer: {
      border: "1px solid #F3F3F3",
      margin: "5px 0",
      borderRadius: "2px"
    },
  }),
);

export default useCommonStyles;