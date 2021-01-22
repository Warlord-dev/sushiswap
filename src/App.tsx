import React, { useCallback, useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import { UseWalletProvider } from 'use-wallet'
import DisclaimerModal from './components/DisclaimerModal'
import MobileMenu from './components/MobileMenu'
import TopBar from './components/TopBar'
// import FarmsProvider from './contexts/Farms'
import ModalsProvider from './contexts/Modals'
// import TransactionProvider from './contexts/Transactions'
// import SushiProvider from './contexts/SushiProvider'
import PresaleProvider from './contexts/PresaleProvider'
import useModal from './hooks/useModal'
import {darkTheme, lightTheme} from './theme'
import Farms from './views/Farms'
import Home from './views/Home'
// import Staking from "./views/Staking";
import FAQ from "./views/Faq";
import { useSelector } from 'react-redux';

const GlobalStyle = createGlobalStyle`
  body {
    background: ${(props: any) => props.theme.backgroundColor};
    color: ${(props: any) => props.theme.bodycolor}
  }
`;
const App: React.FC = () => {
  const [mobileMenu, setMobileMenu] = useState(false)

  const handleDismissMobileMenu = useCallback(() => {
    setMobileMenu(false)
  }, [setMobileMenu])

  const handlePresentMobileMenu = useCallback(() => {
    setMobileMenu(true)
  }, [setMobileMenu])

  return (
    <Providers>
      <Router>
        <TopBar onPresentMobileMenu={handlePresentMobileMenu} />
        <MobileMenu onDismiss={handleDismissMobileMenu} visible={mobileMenu} />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          {/* <Route path="/farms">
            <Farms />
          </Route> */}
          {/* <Route path="/staking">
            <Staking />
          </Route> */}
          <Route path="/faq">
            <FAQ />
          </Route>
        </Switch>
      </Router>
    </Providers>
  )
}

const Providers: React.FC = ({ children }) => {
  const theme = useSelector((state: any) => state.theme);
  return (
    
    <ThemeProvider theme={lightTheme}>
    <GlobalStyle/>
      <UseWalletProvider
        chainId={4}
        connectors={{
          walletconnect: { rpcUrl: 'https://mainnet.eth.aragon.network/' },
        }}
      >
        <PresaleProvider>
          {/* <TransactionProvider> */}
            {/* <FarmsProvider> */}
              <ModalsProvider>{children}</ModalsProvider>
            {/* </FarmsProvider> */}
          {/* </TransactionProvider> */}
        </PresaleProvider>
      </UseWalletProvider>
    </ThemeProvider>
  )
}

const Disclaimer: React.FC = () => {
  const markSeen = useCallback(() => {
    localStorage.setItem('disclaimer', 'seen')
  }, [])

  const [onPresentDisclaimerModal] = useModal(
    <DisclaimerModal onConfirm={markSeen} />,
  )

  useEffect(() => {
    const seenDisclaimer = false //localStorage.getItem('disclaimer')
    if (!seenDisclaimer) {
      onPresentDisclaimerModal()
    }
  }, [])

  return <div />
}

export default App
