import React from 'react'
import styled from 'styled-components'
import chef from '../../assets/img/chef.png'
import Button from '../../components/Button'
import Container from '../../components/Container'
import Page from '../../components/Page'
import PageHeader from '../../components/PageHeader'
import Spacer from '../../components/Spacer'
import Balances from './components/Balances'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Fade, Backdrop, Modal, Input } from '@material-ui/core';
import { useWallet } from 'use-wallet'
import BigNumber from 'bignumber.js'
import usePresale from '../../hooks/usePresale'
import { deposit } from '../../presale/utils'
import Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }),
);

const Home: React.FC = () => {
  const { account, ethereum }: { account: any; ethereum: any } = useWallet()
  let description 
  if(account) {
    description = <p id="transition-modal-description">Min xx Ether, Max xx Ether</p>;
  }
  else {
    description = <p id="transition-modal-description">Connect your Wallet</p>;
  }
  const classes = useStyles();
  let depostInput = '';
  const [open, setOpen] = React.useState(false);
  const [showAlert, setAlertErr] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const depositInputChange = (e : any) => {
    setAlertErr(false)
    depostInput = e.target.value;
  }

  
  const presale = usePresale();

  const depositEther = () => {
    console.log(account)
    console.log(presale)
    console.log(depostInput)
    if(depostInput == null || depostInput ==undefined || depostInput =='' || new BigNumber(depostInput).toNumber() < 0) {setAlertErr(true); return;}
    const tx = deposit(presale, account, depostInput)
    
    console.log(tx)
    handleClose();
  };
  var ErrAlert;

  if (showAlert) {
    ErrAlert = <Alert severity="error">Enter Correct Ether Value!</Alert>;
  } 
  else {
    ErrAlert = ""
  }

  return (
    <Page>
      <PageHeader
        icon={<img src={chef} height={120} />}
        title="Sample, text and Sample"
        subtitle="Presale Starts Soon!"
      />
        <StyledContainer>
          <Balances />
        </StyledContainer>
      <Spacer size="lg" />
      <div
        style={{
          margin: '0 auto',
        }}
      >
        <Button text="Deposit"  onClick={handleOpen} variant="secondary" />
      </div>
      <Spacer size="lg" />
      <div
        style={{
          margin: '0 auto',
        }}
      >
        <Button text="🔪 See Power Ups" to="/farms" variant="secondary" />
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Deposit</h2>
            {description}
            <Input type='number' onChange={depositInputChange} />
              {ErrAlert}
                
            <Button disabled ={!account} text="Deposit" onClick={depositEther} variant="secondary" />
          </div>
        </Fade>
      </Modal>
    </Page>
  )
}

const StyledInfo = styled.h3`
  color: ${(props) => props.theme.bodycolor};
  font-size: 16px;
  font-weight: 400;
  margin: 0;
  padding: 0;
  text-align: center;

  > b {
    color: ${(props) => props.theme.bodycolor};
  }
`
const StyledContainer = styled.div`
    box-sizing: border-box;
    margin: 0 auto;
    max-width: 400px;
    padding: 0 24px;
    width: 100%;

`

export default Home
