import React, { useState } from 'react';
import { Typography, Modal, Paper, TextField } from '@material-ui/core';
import { BasicButton } from "components"

import useStyles from "components/StakingContainer/styles";
import useCommonStyles from "styles/common-styles";

function StakingContainer() { 
    const classes = useStyles();
    const commonClasses = useCommonStyles();
    const [modal, setUnstakeModal] = useState(false);

    const UnstakeModal = () => {
        const [unstakeAmount, setUnstakeAmount] = useState(0);
        const [nextTabModal, setTabModal] = useState(false);

        const changeTabModal = (tab: boolean, amount: number) => { setUnstakeModal(tab); setUnstakeAmount(amount); setTabModal(false)}

        return (
        <Modal
            open={modal}
            onClose={() => changeTabModal(false, 0)}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
          >
              <div className={commonClasses.centeredBox} style={{ height: "100%" }}>
              {!nextTabModal ? 
                <Paper className={classes.modal}>
                    <Typography variant="body1" color="primary" style={{ padding: "2%" }}>How many tokens would you like to unstake?</Typography>
                    <TextField required type="number" className={classes.input} inputProps={{ style: { textAlign: 'center' }}} onChange={(e) => setUnstakeAmount(parseInt(e.target.value))}  placeholder="0" value={unstakeAmount} />
                    <BasicButton onClick={unstakeAmount !== 0 ? () => setTabModal(true) : ""} whiteTheme title="Initiate Unstaking" />
                </Paper> : 
                <Paper className={classes.nextTabModal}>
                <Typography variant="body1" color="primary" style={{ padding: "2%" }}>Are you sure you would like to unstake {unstakeAmount} tokens?</Typography>
                <div className={commonClasses.centeredBox} style={{ flexDirection: "row" }}>
                <Typography onClick={() => changeTabModal(false, 0)} variant="body1" color="primary" className={classes.cancelButton}>Cancel</Typography>
                <BasicButton whiteTheme title="Yes, Initiate Unstake" />
                </div>
                </Paper>
                }
            </div>
          </Modal>)
    }

    return (<div className={commonClasses.marginContainer} style={{ width: "50%" }}>
            <div className={commonClasses.titleWithButton}>
                <Typography variant="body1" color="secondary">Staking</Typography>
                <BasicButton title="+ Stake" />
            </div>
            <div className={commonClasses.borderContainer} style={{ padding: "5%" }}> 
            <div className={commonClasses.centeredBox}>
                <Typography variant="body1" color="textSecondary" style={{ padding: "2%" }}>Staked</Typography>
                <Typography variant="h2" color="secondary" style={{ padding: "2%" }}>0</Typography>
                <Typography variant="body1" color="textSecondary" style={{ padding: "2%" }}>Unstaked</Typography>
                <Typography variant="h2" color="secondary" style={{ padding: "2%" }}>0</Typography>
            </div>
            <div className={commonClasses.leftBox}>
                <Typography variant="body1" color="secondary" style={{ textDecoration: "underline "}} onClick={() => setUnstakeModal(true)}>Initiate Unstake</Typography>
                {UnstakeModal()}
            </div>
      </div>
    </div>);

}

export default StakingContainer;