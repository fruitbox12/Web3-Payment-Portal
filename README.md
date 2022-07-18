# Keyrxng's Web3 Payment Portal

## Stacks Used:

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"
    rel="noreferrer"> <img
      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
      alt="javascript" width="60" height="60" />
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"
    rel="noreferrer"> <img
      src="https://yt3.ggpht.com/ARn8KaUkI7-dVrO0YZEAVJDCfN9bhaLHExWf5nx98oildBZC_CDwqs_Qj7_thPnx1eY2DZG42A=s88-c-k-c0x00ffffff-no-rj"
      alt="javascript" width="60" height="60" />
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"
    rel="noreferrer"> <img
      src="https://icon-library.com/images/react-icon/react-icon-29.jpg"
      alt="javascript" width="60" height="60" />
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"
    rel="noreferrer"> <img
      src="https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg"
      alt="javascript" width="60" height="60" />
</a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"
    rel="noreferrer"> <img
      src="https://avatars.githubusercontent.com/u/70477508?s=200&v=4"
      alt="javascript" width="60" height="60" />
</a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"
    rel="noreferrer"> <img
      src="https://avatars.githubusercontent.com/u/68716856?s=200&v=4"
      alt="javascript" width="60" height="60" />
</a>

<br/>

<br/>

# Installation

## What to change:

    /.env.example => /.env
    Input appropriate keys

    /Payments/payments
    const Pay = () => {...
    ... accept: [] <---- enter your own address and your accepted token addresses

    /Payments/Onramp
    const allowedTokens = {} <---- enter your own accepted tokens using the token symbol

## How to run:

    yarn install
    yarn start

## TODOs

### # 0. Handling payment tracking via onramper

### # 1. Handling transaction response from Depay

### # 3. Handle donations info display i.e total to date, biggest donation, repeat donators

### # 4. Include a more comprehensive list of available donation routes

## Limitations

### # 1. Onramper allows the purchasing of any token with a liquidity pair while Depay is has preset tokens

### # 2. Spoofing the Onramper api is possible for purchase response but without a depay having testnet access it's harder to spoof the blockchain response

## Tidbit

### This was a pet project to learn some typescript as well as build a small scale contained dApp which if you ask me I've succeeded on one half while the typescipt written is a disaster but it's a work in progress.
