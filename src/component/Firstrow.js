import React from 'react'
import dollar from '../images/dollar.svg'
//material ui components

import { useTheme} from 'styled-components';
import useMediaQuery from '@mui/material/useMediaQuery';

//project importss
import ResponsiveAppBar from './ResponsiveAppBar';

const Firstrow = () => {
 

    const theme = useTheme();
    const phone = useMediaQuery(theme.breakpoints.between('xs','sm'));
    const tablet = useMediaQuery(theme.breakpoints.between('sm','md'));
    const laptop = useMediaQuery(theme.breakpoints.between('md','lg'));
    const desktop = useMediaQuery(theme.breakpoints.between('lg','xl'));
    const largescreen = useMediaQuery(theme.breakpoints.up('xl'));

  return (
    <>
    <img style={{ width: phone?'6vw':'3vw',
    marginTop:'2.5vh',
    marginLeft:phone?'1vw':'' }} src={dollar} alt="dollar" />
    <ResponsiveAppBar />
    </>
  )
}

export default Firstrow