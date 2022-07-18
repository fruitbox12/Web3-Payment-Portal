import React, { useState } from 'react'
import { useMoralis } from 'react-moralis'
import { Button, ConnectButton, Row, Information } from 'web3uikit'
import { Payments } from '../Payments/Payments'
import { Col, Grid, Button as Btn } from '@mui/material'
import Navbar from './Navbar'
import Onramp from '../Payments/Onramp'

interface Props {
  data: string,
}

function Home({ data }: Props) {
  const { logout } = useMoralis()
  const [tokenBought, setTokenBought] = useState('lolol')
  const [tokenAmount, setTokenAmount] = useState('roflrofl')
  const [selectedToken, setSelectedToken] = useState('ETH')
  const [donations, setDonations] = useState(0)


  return (

    <>
      <Navbar />

      <div style={{ display: 'flex', }}>
        <Information sx={{
          maxWidth: '10%', maxHeight: '100px', marginLeft: '15px', marginTop: '25px',
          paddingLeft: '150px',
          alignContent: 'right',
          justifyContent: 'right',
        }} style={{ margin: '10px 10px 0 20px ' }} information={donations} topic={`Donations already made`} />


        <Information sx={{
          maxWidth: '10%', maxHeight: '100px', marginLeft: '15px', marginTop: '25px',
          paddingLeft: '150px',
          alignContent: 'right',
          justifyContent: 'right',
        }} style={{ margin: '10px 10px 0 10px ' }} information={tokenAmount} topic={`Payments processed`} />


        <Information sx={{
          maxWidth: '10%',
          maxHeight: '100px',
          marginLeft: '15px',
          marginTop: '25px',
          paddingLeft: '150px',
          alignContent: 'right',
          justifyContent: 'right',
        }} style={{ margin: '10px 10px 0 10px ' }} information={tokenAmount} topic={`Your current balance of ${selectedToken}`} />


        <Information sx={{
          maxWidth: '10%', maxHeight: '100px', marginLeft: '15px', marginTop: '25px',
          paddingLeft: '150px',
          alignContent: 'right',
          justifyContent: 'right',
        }} style={{ margin: '10px 20px 0 10px ' }} information={'Placeholder'} topic={`Placeholder`} />

      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignContent: 'center' }}>


        <Onramp />


      </div>
      <Grid>

      </Grid>
      <Payments />


    </>
  )
}

export default Home