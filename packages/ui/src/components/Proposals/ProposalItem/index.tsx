import React from "react";
import {
  Box,
  Typography
} from "@material-ui/core";
import {
    Chart,
    BarSeries
  } from '@devexpress/dx-react-chart-material-ui';

import { Animation, Palette } from '@devexpress/dx-react-chart';

import WarningIcon from '@material-ui/icons/Warning';
import CloseIcon from '@material-ui/icons/Close';
import DoneIcon from '@material-ui/icons/Done';
import ChangeHistoryIcon from '@material-ui/icons/ChangeHistory';


import useStyles from "components/Proposals/ProposalItem/styles";

function ProposalItem(props: any) {
  const classes = useStyles(props);
    console.log(props)

    const data = [
        { year: '1950', population: 2.525,  },
        { ear: '1960', pop: 3.018 },
      ];

  return (
    <Box className={classes.proposalitem} padding="16px" display="flex">
        <Box width="50%">
        <Typography variant="body1" color="secondary">Vote #: { props.voteIndex }</Typography>
        <Box display="flex" justifyContent="space-between">
        {!props.vote.executed ? 
            <Box display="flex" alignItems="center"> 
                <WarningIcon className={classes.activeIcon} color="secondary" fontSize="small" />
                <Typography variant="subtitle2" color="secondary">Active</Typography>
            </Box>
        : props.vote.executed && parseInt(props.vote.yea) > parseInt(props.vote.nay) ? 
            <Box display="flex" alignItems="center"> 
                <DoneIcon className={classes.doneIcon} fontSize="small" />
                <Typography variant="subtitle2" className={classes.doneIcon}>Passed</Typography>
            </Box >
        :
            <Box display="flex" alignItems="center"> 
                <CloseIcon className={classes.rejectIcon} fontSize="small" />
                <Typography variant="subtitle2" color="secondary" className={classes.rejectIcon}>Rejected</Typography>
            </Box>
        }
        <Box display="flex">
            <Typography variant="subtitle2" className={classes.activeIcon} color="textSecondary">00</Typography>
            <ChangeHistoryIcon style={{ color: "#4A4A4A" }}  fontSize="small" />
        </Box>
        <Box>
            <Typography variant="subtitle2" className={classes.activeIcon} color="textSecondary">{new Date(parseInt(props.vote.startDate)).toLocaleString()}</Typography>
        </Box>
        </Box>
        </Box>
        <Box display="block">
        <Chart
          data={data}
          rotated
          height={60}
          width={120}
        >
          <Palette scheme={['#FFFFFF', '#7CE3CB', '#00C853', '#FFEB3B', '#FF4081', '#E040FB']} />
          <BarSeries
            valueField="population"
            argumentField="year"
          />
           <BarSeries
            valueField="pop"
            argumentField="ear"
          />
          <Animation />
        </Chart>
        </Box>

    </Box>
  );
}

export default ProposalItem;