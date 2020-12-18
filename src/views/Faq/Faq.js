import React, { Component } from 'react';
import {Route, Switch, useRouteMatch} from 'react-router-dom'
import Page from '../../components/Page'
import PageHeader from '../../components/PageHeader'
import styled from 'styled-components'
import Card from '../../components/Card'
import CardContent from '../../components/CardContent'
import CardIcon from '../../components/CardIcon'
import Container from '../../components/Container'
import Label from '../../components/Label'
import Value from '../../components/Value'

class Faq extends Component {
  // constructor(props){
    // super(props);
    // this.state = {};
  // }

  // componentWillMount(){}
  // componentDidMount(){}
  // componentWillUnmount(){}

  // componentWillReceiveProps(){}
  // shouldComponentUpdate(){}
  // componentWillUpdate(){}
  // componentDidUpdate(){}

  render() {
    return (
      // <Container>
        <Page>
          <StyledPageHeader>
            <StyledIcon>📖</StyledIcon>
            <StyledTitle>FAQ</StyledTitle>
            <StyledSubtitle>Learn about YAM</StyledSubtitle>
          </StyledPageHeader>
          <StyledContainer>
            <Card>
              <CardContent>
                <StyledCardContentInner>
                  <StyledCardItem>
                    <StyledCardHeader>
                      What is the YAM protocol?
                    </StyledCardHeader>
                    <StyledActionSpacer />
                    <StyledCardActions>
                      YAM is a decentralized cryptocurrency that uses a rebasing mechanism to raise funds for a treasury managed by the community. The community can then use those funds via YAM governance to build out the protocol.
                    </StyledCardActions>
                  </StyledCardItem>

                  <StyledCardItem>
                    <StyledCardHeader>
                      What is YAM?
                    </StyledCardHeader>
                    <StyledActionSpacer />
                    <StyledCardActions>
                      YAM is the governance token for the YAM protocol. Using token voting, YAM holders have direct influence over the YAM treasury and direction of the protocol. Governance discussions take place on theYam Governance Forum.
                    </StyledCardActions>
                  </StyledCardItem>

                  <StyledCardItem>
                    <StyledCardHeader>
                      What is rebasing?
                    </StyledCardHeader>
                    <StyledActionSpacer />
                    <StyledCardActions>
                      Rebasing is a mechanism generally used to promote price stability by increasing the supply when the price is above the target price and decrease supply when price is below the target. YAM is currently pegged to 1 USDC, and uses the YAM/ETH and ETH/USDC Sushiswap pools to generate a two-hop TWAP (Time-Weighted Average Price) oracle to determine the necessary change in supply.
                    </StyledCardActions>
                    <StyledActionSpacer />
                    <StyledCardActions>
                      If YAM price is above 1.05 USDC, YAM supply increases. This is known as a positive rebase.
                    </StyledCardActions>
                    <StyledActionSpacer />
                    <StyledCardActions>
                      If YAM price is below 0.95 USDC, YAM supply decreases. This is known as a negative rebase.
                    </StyledCardActions>
                    <StyledActionSpacer />
                    <StyledCardActions>
                      If YAM price is between 0.95 and 1.05 USDC, YAM does not rebase.
                    </StyledCardActions>
                    <StyledActionSpacer />
                    <StyledCardActions>
                      Every YAM holder gets the same increase or decrease in supply every rebase. However, this increase or decrease is offset by the subsequent increase or decrease in price.
                    </StyledCardActions>
                  </StyledCardItem>
                
                  <StyledCardItem>
                    <StyledCardHeader>
                      What is the math behind each rebase?
                    </StyledCardHeader>
                    <StyledActionSpacer />
                    <StyledCardActions>
                    YAM does not try to target $1 all at once, instead attempting to do it over 10 rebase periods.
                    </StyledCardActions>
                    <StyledActionSpacer />
                    <StyledCardActions>
                    To calculate change in supply we need to determine how far from the peg the current price is. This formula is:
                    </StyledCardActions>
                    <StyledActionSpacer />
                    <StyledCardActions>
                    Deviation from peg = (Current Price - Target Price) / Target Price
                    </StyledCardActions>
                    <StyledCardActions>
                    Rebase Amount = Current Supply * (Deviation From Peg/10)
                    </StyledCardActions>
                    <StyledCardActions>
                    New Supply = Current supply + Rebase Amount
                    </StyledCardActions>
                  </StyledCardItem>

                  <StyledCardItem>
                    <StyledCardHeader>
                    Does this mean I gain or lose money every rebase?
                    </StyledCardHeader>
                    <StyledActionSpacer />
                    <StyledCardActions>
                    No. The Uniswap liquidity pools are in sync with every rebase. This means that if supply is increased by 20% in a rebase, price will drop 20% to offset it.
                    </StyledCardActions>
                    <StyledActionSpacer />
                    <StyledCardActions>
                    Imagine the following scenario. YAM is at $2 and you hold 100 YAM. This means your YAM holdings are $200. A rebase comes and it's a positive 20% rebase. You now have 120 YAM but the price will go $1.67, so your YAM holdings are still worth $200!
                    </StyledCardActions>
                  </StyledCardItem>

                  <StyledCardItem>
                    <StyledCardHeader>
                      How does YAM have a treasury?
                    </StyledCardHeader>
                    <StyledActionSpacer />
                    <StyledCardActions>
                      In the Yam protocol, when a positive rebase occurs, 5% of the YAM rebase amount is minted and sold for ETH via the YAM/ETH Sushiswap pool. The ETH is subsequently deposited to the governance-controlled treasury.
                   </StyledCardActions>
                  </StyledCardItem>

                  <StyledCardItem>
                    <StyledCardHeader>
                    Can LPs participate in governance?
                    </StyledCardHeader>
                    <StyledActionSpacer />
                    <StyledCardActions>
                    Only LPs that are staked in the Incentivizer contract can participate in governance. Voting power is determined by distributing the voting power of YAM held in the YAM/ETH Sushiswap pool, but distributed to only YAM Incentivizer stakers. This was done to mitigate flashloan threats in voting, so the Incentivizer contract keeps a record of the necessary values at needed block heights to facilitate those mitigations.
                   </StyledCardActions>
                  </StyledCardItem>

                  <StyledCardItem>
                    <StyledCardHeader>
                    Can I farm YAM?
                    </StyledCardHeader>
                    <StyledActionSpacer />
                    <StyledCardActions>
                    Currently check: Farm to know if you are able to farm.
                   </StyledCardActions>
                  </StyledCardItem>

                  <StyledCardItem>
                    <StyledCardHeader>
                    What is the scaling factor?
                    </StyledCardHeader>
                    <StyledActionSpacer />
                    <StyledCardActions>
                    Because YAM supply is constantly changing due to rebases, it’s hard to keep up with the ever changing supply amount. Yam.finance provides a scaling factor that you can use which allows you to go from initial Yam v3 supply amount to today’s supply amount.
                   </StyledCardActions>
                  </StyledCardItem>

                  <StyledCardItem>
                    <StyledCardHeader>
                    What is yUSD?
                    </StyledCardHeader>
                    <StyledActionSpacer />
                    <StyledCardActions>
                    yUSD is an interest earning stablecoin generated from yearn.finance vaults. Users are able to deposit yCRV (generated here) into the vaults which then yield interest on the deposit over time.
                   </StyledCardActions>
                  </StyledCardItem>

                </StyledCardContentInner>
              </CardContent>
            </Card>
          </StyledContainer>
          {/* <StyledContainer>
            <StyledContentInner>

            </StyledContentInner>
          </StyledContainer> */}
        </Page>
      // {/* </Container> */}
    );
  }
}
const StyledContainer = styled.div`
  box-sizing: border-box;
    margin: 0px auto;
    max-width: 800px;
    padding: 0px 24px;
    width: 100%;

`
const StyledContentInner = styled.div`
  background: radial-gradient(circle at center top, rgb(247, 243, 244), rgb(243, 237, 239));
  border: 0px;
  border-radius: 28px;
  box-shadow: rgba(20, 1, 8, 0.15) -2px 2px 4px inset, rgb(255, 255, 255) 2px -2px 4px inset;
`

const StyledCardHeader = styled.div`
  display: flex;
  flex-direction: column;
  
  color: rgb(20, 1, 8);
  display: block;
  font-size: 24px;
  font-weight: 700;
`
const StyledCardActions = styled.div`
  display: flex;
  justify-content: left;
  width: 100%;
`

const StyledActionSpacer = styled.div`
  height: ${(props) => props.theme.spacing[4]}px;
  width: ${(props) => props.theme.spacing[4]}px;
`

const StyledCardContentInner = styled.div`
  align-items: left;
  display: flex;
  flex: 1;
  flex-direction: column;
  max-width: 800px;
  margin: 24px;
`

const StyledCardItem = styled.div`
    display: block;
    margin-bottom: 16px;
    margin-top: 16px;
    padding-bottom: 24px;
    padding-top: 24px;
    align-items: left;

`

const StyledIcon = styled.div`
  font-size: 96px;
  height: 96px;
  line-height: 96px;
  text-align: center;
  min-width: 96px;
`
const StyledTitle = styled.h1`
  font-family: 'Kaushan Script', sans-serif;
  color: ${(props) => props.theme.color.grey[600]};
  font-size: 36px;
  text-align: center;
  font-weight: 700;
  margin: 0;
  padding: 0;
`

const StyledSubtitle = styled.h3`
  color: ${(props) => props.theme.color.grey[400]};
  font-size: 18px;
  font-weight: 400;
  margin: 0;
  padding: 0;
  text-align: center;
`

const StyledPageHeader = styled.h3`
  -webkit-box-align: center;
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding: 48px 0px;
  margin: 0px auto;
`
export default Faq;