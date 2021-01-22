import React, { createContext, useEffect, useState } from 'react'

import { useWallet } from 'use-wallet'

import { Presale } from '../../presale'

export interface PresaleContext {
  presale?: typeof Presale
}

export const Context = createContext<PresaleContext>({
  presale: undefined,
})

declare global {
  interface Window {
    sushisauce: any
  }
}

const PresaleProvider: React.FC = ({ children }) => {
  const { ethereum }: { ethereum: any } = useWallet()
  const [presale, setPresale] = useState<any>()

  // @ts-ignore
  window.presale = presale
  // @ts-ignore


  useEffect(() => {
    if (ethereum) {
      const chainId = Number(ethereum.chainId)
      const presaleLib = new Presale(ethereum, chainId, false, {
        defaultAccount: ethereum.selectedAddress,
        defaultConfirmations: 1,
        autoGasMultiplier: 1.5,
        testing: false,
        defaultGas: '6000000',
        defaultGasPrice: '1000000000000',
        accounts: [],
        ethereumNodeTimeout: 10000,
      })
      setPresale(presaleLib)
      window.sushisauce = presaleLib
    }
  }, [ethereum])

  return <Context.Provider value={{ presale }}>{children}</Context.Provider>
}

export default PresaleProvider
