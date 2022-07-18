import React from 'react'
import { useMoralis } from 'react-moralis'
import { Information } from 'web3uikit'
import { Payments } from '../Payments/Payments'
import Navbar from './Navbar'
import Onramp from '../Payments/Onramp'

function Home() {
  const { isAuthenticated, userError } = useMoralis()
  // const [hasBought, setHasBought] = useState(false);
  // const [tranx, setTranx] = useState(0);
  // const [preTxData, setPreTxData] = useState()
  // const [userAddr, setUserAddr] = useState();

  // const Web3Api = useMoralisWeb3Api();
  // const [limit, setLimit] = useState(3);
  // const { data, error, isLoading } = useMoralisQuery("EthTransactions");

  // const blocks = []


  // useEffect(() => {
  //   setUserAddr(user?.attributes.accounts[0])
  //   for (const tx in data) {
  //     data.map((e, i) => {
  //       let blockNos = e.attributes.block_number
  //       blocks.push(blockNos)
  //     })
  //   }
  //   let highest = blocks.sort((a, b) => b - a);
  //   blocks.push(highest)
  //   setPreTxData(blocks[0])
  // }, [user])

  // useEffect(() => {
  //   if (!isLoading) {
  //     let lastRecentBlock = blocks
  //     refetchUserData()
  //     if (lastRecentBlock < blocks) 
  //       console.log("e")
  //     } else {
  //       refetchUserData()
  //     }


  //   }, [isLoading])


  return (

    <>
      <Navbar />
      {
        userError && <div>
          <p>
            {userError.message}
          </p>

        </div >
      }

      {isAuthenticated && (<Information sx={{
        maxWidth: '10%', maxHeight: '100px', marginLeft: '15px', marginTop: '25px',
        paddingLeft: '150px',
        alignContent: 'right',
        justifyContent: 'right',
      }} style={{ margin: '10px 10px 0 20px ' }} information={`Reach out to me @Keyrxng `} topic={`Thank you for your support! `} />
      )}

      <div style={{ display: 'flex', }}>
        {!isAuthenticated ? (<Information sx={{
          maxWidth: '10%', maxHeight: '100px', marginLeft: '15px', marginTop: '25px',
          paddingLeft: '150px',
          alignContent: 'right',
          justifyContent: 'right',
        }} style={{ margin: '10px 10px 0 20px ' }} information={`1. Connect via Moralis`} topic={`How to use: `} />
        ) : (
          <Information sx={{
            maxWidth: '10%', maxHeight: '100px', marginLeft: '15px', marginTop: '25px',
            paddingLeft: '150px',
            alignContent: 'right',
            justifyContent: 'right',
          }} style={{ margin: '10px 10px 0 20px ' }} information={`2. Choose purchase options`} topic={`How to use: `} />
        )}
        <Payments />



      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignContent: 'center', }}>


        <Onramp />


      </div>


    </>
  )
}

export default Home

