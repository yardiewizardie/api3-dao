import React, { useContext } from 'react';
import { 
  Box, 
  Typography,
} from '@material-ui/core';
import { InsurancePool, BalanceContainer, StakingContainer  } from "components";

import { API3Context } from "contexts";
// import { Account, Global } from "components/API3Stats";

import useStyles from "components/API3Stats/styles";
import useCommonStyles from "styles/common-styles";

function API3Stats() {
  const classes = useStyles();
  const commonClasses = useCommonStyles();
  const api3Context = useContext(API3Context);
  console.log('api3Context', api3Context);
  
  const LoadingAccountInfo = () => {
    return (
      <> 
        <Typography variant="h4">
          Connect Wallet
        </Typography>
      </>
    )
  }
  
  const Stats = () => {
    return (
      <Box className={classes.root}>
        <Typography variant="h1" color="textSecondary" className={commonClasses.textBackground}>Dashboard</Typography>
          <Box marginLeft="32px">
            <Typography variant="subtitle2" color="textSecondary">Dashboard</Typography>
            <Typography variant="h2" color="secondary">User Address</Typography>
          </Box>
          <Box marginTop="6%">
            <InsurancePool walletConnected />
          </Box>
          <Box display="flex">
            <BalanceContainer />
            <StakingContainer />
          </Box>
        {/* <Grid container justify="space-evenly" spacing={2}>
          <Grid>
            <Global />
          </Grid>
          <Grid>
            <Account />
          </Grid>
        </Grid> */}

      </Box>
    )
  }
  
  const tokens = api3Context.tokens.length > 0;
  return tokens ? <Stats /> : <LoadingAccountInfo />;
}

export default API3Stats;