import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';


export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
    },
    proposalitem: {
        borderBottom: "1px solid #404040",
    },
    rejectIcon: {
        color: "#823FB1",
        paddingRight: "3px"
    },
    doneIcon: {
        paddingRight: "3px",
        color: theme.palette.info.main
    },
    activeIcon: {
        paddingRight: "3px"
    }
  }),
);

export default useStyles