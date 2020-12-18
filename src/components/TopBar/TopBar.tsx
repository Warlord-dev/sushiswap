import React from 'react'
import styled from 'styled-components'

import Container from '../Container'
import Logo from '../Logo'

import AccountButton from './components/AccountButton'
import ThemeSelector from './components/ThemeSelector'
import Nav from './components/Nav'

interface TopBarProps {
  onPresentMobileMenu: () => void
}

const TopBar: React.FC<TopBarProps> = ({ onPresentMobileMenu }) => {
  return (
    <StyledTopBar>
      <Container size="lg">
        <StyledTopBarInner>
          <StyledLogoWrapper>
            <Logo />
          </StyledLogoWrapper>
          <Nav />
          <StyledButtonGroup>

            <StyledSwitchButtonWrapper>
              <ThemeSelector />
            </StyledSwitchButtonWrapper>
            <StyledAccountButtonWrapper>
              <AccountButton />
            </StyledAccountButtonWrapper>
          </StyledButtonGroup>
        </StyledTopBarInner>
      </Container>
    </StyledTopBar>
  )
}

const StyledLogoWrapper = styled.div`
  width: 260px;
  @media (max-width: 400px) {
    width: auto;
  }
`

const StyledTopBar = styled.div``

const StyledTopBarInner = styled.div`
  align-items: center;
  display: flex;
  height: ${(props) => props.theme.topBarSize}px;
  justify-content: space-between;
  max-width: ${(props) => props.theme.siteWidth}px;
  width: 100%;
`
const StyledNavWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  @media (max-width: 400px) {
    display: none;
  }
`

const StyledAccountButtonWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-end;
  width: 156px;
  @media (max-width: 400px) {
    justify-content: center;
    width: auto;
  }
`

const StyledButtonGroup = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-end;
  @media (max-width: 400px) {
    justify-content: center;
    width: auto;
  }
`

const StyledSwitchButtonWrapper = styled.div`
  background: radial-gradient(circle at center top, rgb(243, 237, 239), rgb(235, 224, 228));
  border: 0px;
  border-radius: 28px;
  box-shadow: rgba(20, 1, 8, 0.15) -4px 4px 8px -4px inset, rgb(255, 255, 255) 4px -4px 8px -4px inset;
`
const StyledMenuButton = styled.button`
  background: none;
  border: 0;
  margin: 0;
  outline: 0;
  padding: 0;
  display: none;
  @media (max-width: 400px) {
    align-items: center;
    display: flex;
    height: 44px;
    justify-content: center;
    width: 44px;
  }
`

export default TopBar
