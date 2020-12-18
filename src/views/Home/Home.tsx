import React from 'react'
import styled from 'styled-components'
import chef from '../../assets/img/chef.png'
import Button from '../../components/Button'
import Container from '../../components/Container'
import Page from '../../components/Page'
import PageHeader from '../../components/PageHeader'
import Spacer from '../../components/Spacer'
import Balances from './components/Balances'

const Home: React.FC = () => {
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
        <Button text="Deposit" to="/farms" variant="secondary" />
      </div>
      <Spacer size="lg" />
      <div
        style={{
          margin: '0 auto',
        }}
      >
        <Button text="🔪 See Power Ups" to="/farms" variant="secondary" />
      </div>
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
