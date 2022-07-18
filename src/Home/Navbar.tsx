import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import Container from '@mui/material/Container';
import KLogo from '../img/Klogo.png'
import { ConnectButton } from 'web3uikit';

const Navbar = () => {


  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          <a href='https://www.keyrxng.xyz'>
            <img
              src={KLogo} alt={'Keyrxng logo'} sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} style={{ width: '30px', height: '30px' }} />
          </a>

          <Typography
            variant="h6"

            component="p"
            sx={{
              ml: 2,
              justifyContent: 'space-between',
              display: { xs: 'block', md: 'block' },
              fontFamily: 'monospace',
              fontWeight: 600,
              letterSpacing: '.1rem',
              color: 'inherit',
              textDecoration: 'none',
            }}

          >
            {'Fiat > Crypto > Donation'}
          </Typography>


          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
          </Typography>
          <ConnectButton />
        </Toolbar>

      </Container>
    </AppBar >
  );
};
export default Navbar;
