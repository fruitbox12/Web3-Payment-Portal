import React from 'react'
import DePayWidgets from '@depay/widgets'
import DePayButton from '@depay/buttons'
import { useMoralis } from 'react-moralis'
import { Button, Card, CryptoCards } from 'web3uikit'

const options = [
  {
    // 1 USDT on ethereum
    blockchain: 'ethereum',
    amount: 1,
    token: '0xdac17f958d2ee523a2206206994597c13d831ec7',
    receiver: '0x196Ff55Af7Ca5df332faf3A72972dDf6d5e109A4',
  },
  {
    // 1 BUSD on bsc
    blockchain: 'bsc',
    amount: 1,
    token: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
    receiver: '0x196Ff55Af7Ca5df332faf3A72972dDf6d5e109A4',
  },
]

export const Payments = () => {
  const { user } = useMoralis({})

  const Pay = () => {
    DePayWidgets.Donation({
      style: {
        colors: {
          primary: '#ffd265',
          text: '#e1b64a',
          buttonText: '#000000',
          icons: '#ffd265',
        },
        css: `
          @import url("https://fonts.googleapis.com/css2?family=Cardo:wght@400;700&display=swap");
    
          .ReactDialogBackground {
            background: rgba(0,0,0,0.8);
          }
        `,
      },
      accept: [
        {
          blockchain: 'ethereum',
          token: '0xa0bEd124a09ac2Bd941b10349d8d224fe3c955eb',
          receiver: '0x196Ff55Af7Ca5df332faf3A72972dDf6d5e109A4',
        },
      ],
    })
  }

  return (
    <>
      <Card
        style={{ marginTop: '10px' }}
        title={'Make Payment'}
        description={
          'Use the tokens you just purchased to pay them directly into my wallet'
        }
        onClick={() => alert('clicked')}
      ></Card>
    </>
  )
}
