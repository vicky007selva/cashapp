import * as React from 'react';

//material ui imports 
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';

import { useTheme} from 'styled-components';
import useMediaQuery from '@mui/material/useMediaQuery';


//image imports
import eye from '../images/eye.png'

const pages = ['SIGN IN', 'LEGAL', 'LICENCES', 'SECURITY', 'CAREERS', 'PRESS', 'SUPPORT', 'STATUS', 'CODEBLOG'];

function ResponsiveAppBar() {

  const theme = useTheme();
  const phone = useMediaQuery(theme.breakpoints.between('xs', 'sm'));
  const tablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const laptop = useMediaQuery(theme.breakpoints.between('md', 'lg'));
  const desktop = useMediaQuery(theme.breakpoints.between('lg', 'xl'));
  const largescreen = useMediaQuery(theme.breakpoints.up('xl'));


  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar sx={{ backgroundColor: 'transparent' }}>
      <Container  >
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon sx={{fontSize:'5rem'}}/>
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography sx={{
                    color: 'black', fontFamily: 'Agrandir', fontSize: '0.75rem', fontStyle: 'normal', fontWeight: 800,
                    lineHeight: '1.125rem',
                    letterSpacing: '0.03125rem'
                  }} textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block', ml: '2vw' }}
              >
                <Typography sx={{
                  color: 'weight', fontFamily: 'sans-serif', fontSize: '0.75rem', fontStyle: 'normal', fontWeight: 800,
                  lineHeight: '1.125rem',
                  letterSpacing: '0.03125rem',
                }}>
                  {page}
                </Typography>
              </Button>
            ))}

          </Box>
          <img style={{ width: phone ? '8rem' : '5vw', height: phone?'6rem':'', padding: '1rem',marginRight:phone?'1rem':'' }} src={eye} alt='eye' />

        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
