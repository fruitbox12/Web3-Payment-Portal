import React, { FC } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { MoralisProvider } from 'react-moralis'
import Home from './Home/Home'

const server: string = process.env.REACT_APP_SERVER_URL ?? ''
const id: string = process.env.REACT_APP_APPID ?? ''

export const App: FC = () => {

  return (
    <React.StrictMode>
      <MoralisProvider
        appId={id}
        serverUrl={server}
      >
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </MoralisProvider>
    </React.StrictMode>
  )
}