import React from 'react'
import OnramperWidget from '@onramper/widget'


export default function WidgetContainer({ tokenBought, tokenAmount }) {


  const onrampKey = process.env.REACT_APP_ONRAMP_KEY ?? ''

  const allowedTokens = ['USDT', 'USDC', 'BUSD', 'DAI']


  return (
    <div
      sx={{ display: { xs: 'block' }, mr: 1 }}
      style={{
        width: '482px',
        height: '660px',

        alignContent: 'center',
        justifyContent: 'center',
      }}
    >
      <OnramperWidget
        style={{
          alignContent: 'center',
          justifyContent: 'center',
        }}
        API_KEY={onrampKey}
        defaultAmount={'28'}
        defaultCrypto={'USDT'}
        filters={{
          onlyCryptos: allowedTokens
        }}

        defaultFiat={'GBP'}
        isAddressEditable={true}
        darkMode={false}
      />
    </div>
  )
}
