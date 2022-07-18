import React, {FC} from 'react'
import { BrowserRouter } from 'react-router-dom'
import { MoralisProvider } from 'react-moralis'
import Home from './Home/Home'


interface Data {
  info: string
}

const server: string = process.env.REACT_APP_SERVER_URL ?? ''
const id: string = process.env.REACT_APP_APPID ?? ''

export const App: FC<Data> = (data) => {

  return (
    <React.StrictMode>
      <MoralisProvider
        appId={id}
        serverUrl={server}
      >
        <BrowserRouter>
          <Home data={data.info}/>
        </BrowserRouter>
      </MoralisProvider>
    </React.StrictMode>
  )
}