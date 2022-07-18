import React from 'react'
import OnramperWidget from '@onramper/widget'

export default function WidgetContainer({ tokenBought }) {
  const wallets = {
    BTC: { address: 'btcAddr' },
    BNB: { address: '0x196Ff55Af7Ca5df332faf3A72972dDf6d5e109A4', memo: 'cryptoTag' },
    ETH: { address: '0x196Ff55Af7Ca5df332faf3A72972dDf6d5e109A4' },

  }

  const onrampKey = process.env.REACT_APP_ONRAMP_KEY ?? ''

  return (
    <div
      style={{
        width: '482px',
        height: '660px',
        marginTop: '25px',
        paddingLeft: '150px',
        alignContent: 'right',
        justifyContent: 'right',
      }}
    >
      <OnramperWidget
        API_KEY={onrampKey}
        // color={'defaultColor'}
        defaultAddrs={wallets}
        defaultAmount={'6'}
        defaultCrypto={'ETH'}
        defaultFiat={'GBP'}
        isAddressEditable={true}
        amountInCrypto={'6'}
        darkMode={false}
      />
    </div>
  )
}
