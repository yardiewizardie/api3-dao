import React, {
    useState,
  } from "react";
  import {
    Typography,
    Modal,
    Paper,
    Box,
    TextField,
    Select,
    MenuItem
  } from "@material-ui/core";
  
  import { BasicButton } from "components";
  import { CloseIcon } from "components/@material-icons";
  import { useStyles, CustomSelect }from "components/Modal/styles";
  
  function NewProposalModal(props: any) {
    const classes = useStyles();
    const [address, setAddress] = useState("");
    const [typeOfProposal, setTypeOfProposal ] = useState("type1");
    const [ amount, setAmount] = useState(0);
    const [typeOfToken, setTypeOfToken ] = useState("usdc");
    const [linkInfo, setLinkInfo] = useState("");
    const [otherAddress, setOtherAddress] = useState("");
    const { setProposalModal, setDelegateAddress, newProposalModal } = props;
    
    const onClose = () => {
      setProposalModal(false);
    }
    
    const onChange = (event: any, setState: Function ) => {
      setState(event.target.value);
    }
  
    const onSubmit = () => {
      onClose();
      setDelegateAddress(address);
    }
    
    return (
      <Modal
        open={newProposalModal}
        onClose={onClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <Box display="flex" alignItems="center" justifyContent="center" flexDirection="column" height="100%">
          <Box onClick={onClose} marginLeft="23%">
            <CloseIcon color="secondary" fontSize="large" />
          </Box>
          <Paper className={typeOfToken === "other" ? classes.newProposalWithOther : classes.newProposal}>
            <Box  display="flex" alignContent="center" marginBottom="56px">
                <Box display="flex" alignItems="center" justifyContent="center">
                    <Typography variant="body1" color="primary">Proposal Type</Typography>
                </Box>
             <Box marginLeft="36px" width="174px">
                <Select
                    fullWidth
                    labelId="typeof-select-label"
                    id="typeof-select"
                    value={typeOfProposal}
                    onChange={(e) => onChange(e, setTypeOfProposal)}
                    input={<CustomSelect  />}
                    >
                    <MenuItem value={"type1"}>Type 1</MenuItem>
                    <MenuItem value={"type2"}>Type 2</MenuItem>
                </Select>
            </Box>
            </Box>
            <Box display="flex" marginBottom="24px">
                <Box paddingRight="6px">
                    <Typography variant="body1" color="primary">Recipient</Typography>
                </Box>
                {typeOfToken !== "other" && <Typography variant="body1" color="textSecondary">  Must be a valid Ethereum address</Typography>}
            </Box>
              <TextField 
                required
                onChange={(e) => onChange(e, setAddress)}  
                placeholder="Enter user’s address here" 
                value={address}
                className={classes.input}
              />
            <Box display="flex"  marginTop="36px" >
                <Box width="65%" marginRight="24px">
                <Typography variant="body1" color="primary">Amount</Typography>
                <Box marginTop="24px">
                    <TextField 
                        required
                        onChange={(e) => onChange(e, setAmount)}  
                        placeholder="1234" 
                        value={amount}
                        className={classes.input}
                    />
                </Box>
              </Box>
              <Box width="30%">
                <Typography variant="body1" color="primary">Token</Typography>
                <Box marginTop="24px">
                <Select
                    fullWidth
                    labelId="token-select-label"
                    id="token-select"
                    value={typeOfToken}
                    onChange={(e) => onChange(e, setTypeOfToken)}
                    input={<CustomSelect  />}
                    >
                    <MenuItem value={"usdc"}>USDC</MenuItem>
                    <MenuItem value={"eth"}>ETH</MenuItem>
                    <MenuItem value={"api3"}>API3</MenuItem>
                    <MenuItem value={"other"}>Other</MenuItem>
                </Select>
                </Box>
              </Box>
            </Box>
            {typeOfToken === "other" &&
            <Box marginBottom="24px" marginTop="28px">
                <Box marginBottom="24px">
                    <Typography variant="body1" color="primary">Other Token Address</Typography>
                </Box>
                <TextField 
                    required
                    onChange={(e) => onChange(e, setOtherAddress)}  
                    placeholder="Enter token’s address" 
                    value={otherAddress}
                    className={classes.input}
                />
            </Box>
            }
            <Box marginBottom="24px" marginTop="28px">
                <Box marginBottom="24px">
                    <Typography variant="body1" color="primary">Reference</Typography>
                </Box>
                <TextField 
                    required
                    onChange={(e) => onChange(e, setLinkInfo)}  
                    placeholder="Link to more information" 
                    value={linkInfo}
                    className={classes.input}
                />
            </Box>
          <Box display="flex" justifyContent="flex-end">
            <BasicButton title="Submit Proposal" color="white" onClick={() => onSubmit()} />
          </Box> 
          </Paper>
        </Box>
      </Modal>
    );
  }
  
  export default NewProposalModal;