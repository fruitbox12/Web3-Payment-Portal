import React, { useState } from 'react'
import DePayWidgets from '@depay/widgets'
import { Card } from 'web3uikit'

export const Payments = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = (event) => {
    setIsOpen((current) => !current)
  }

  const Pay = () => {
    return DePayWidgets.Donation({
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
        //USDT
        {
          blockchain: 'ethereum',
          token: '0xdac17f958d2ee523a2206206994597c13d831ec7',
          receiver: '0x196Ff55Af7Ca5df332faf3A72972dDf6d5e109A4',
        },
        {
          blockchain: 'bsc',
          token: '0x55d398326f99059ff775485246999027b3197955',
          receiver: '0x196Ff55Af7Ca5df332faf3A72972dDf6d5e109A4',
        },
        {
          blockchain: 'polygon',
          token: '0xc2132d05d31c914a87c6611c10748aeb04b58e8f',
          receiver: '0x196Ff55Af7Ca5df332faf3A72972dDf6d5e109A4',
        },

        //USDC
        {
          blockchain: 'ethereum',
          token: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
          receiver: '0x196Ff55Af7Ca5df332faf3A72972dDf6d5e109A4',
        },
        {
          blockchain: 'bsc',
          token: '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d',
          receiver: '0x196Ff55Af7Ca5df332faf3A72972dDf6d5e109A4',
        },
        {
          blockchain: 'polygon',
          token: '0x2791bca1f2de4661ed88a30c99a7a9449aa84174',
          receiver: '0x196Ff55Af7Ca5df332faf3A72972dDf6d5e109A4',
        },

        //DAI
        {
          blockchain: 'ethereum',
          token: '0x6b175474e89094c44da98b954eedeac495271d0f',
          receiver: '0x196Ff55Af7Ca5df332faf3A72972dDf6d5e109A4',
        },
        {
          blockchain: 'bsc',
          token: '0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3',
          receiver: '0x196Ff55Af7Ca5df332faf3A72972dDf6d5e109A4',
        },
        {
          blockchain: 'polygon',
          token: '0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063',
          receiver: '0x196Ff55Af7Ca5df332faf3A72972dDf6d5e109A4',
        }, //BUSD
        {
          blockchain: 'ethereum',
          token: '0x4Fabb145d64652a948d72533023f6E7A623C7C53',
          receiver: '0x196Ff55Af7Ca5df332faf3A72972dDf6d5e109A4',
        },
        {
          blockchain: 'bsc',
          token: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
          receiver: '0x196Ff55Af7Ca5df332faf3A72972dDf6d5e109A4',
        },
        {
          blockchain: 'polygon',
          token: '0xa8d394fe7380b8ce6145d5f85e6ac22d4e91acde',
          receiver: '0x196Ff55Af7Ca5df332faf3A72972dDf6d5e109A4',
        },
      ],
    })
  }

  return (
    <>
      <Card
        style={{ margin: '10px 20px 0 10px ' }}
        title={'Send Donation'}
        description={'Donate an arbitrary amount of tokens'}
        onClick={handleClick}
      ></Card>
      {isOpen && <Pay />}
    </>
  )
}
