import React from 'react'

//image imports
import introcube from '../images/introcube.png'
import introstairs from '../images/introstairs.png'
import intropillar from '../images/intropillar.png'
import introhalfcubes from '../images/introhalfcubes.png'

import { useTheme } from 'styled-components';
import useMediaQuery from '@mui/material/useMediaQuery';

//material ui imports
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { Box, Typography } from '@mui/material';

//project imports
import Firstrow from '../component/Firstrow'
import CenterRow from '../component/CenterRow'
import Footer from '../component/Footer'

const AdvertisementPage = () => {

  const theme = useTheme();
  const smallphone = useMediaQuery(theme.breakpoints.between('xxs', 'xs'));
  const phone = useMediaQuery(theme.breakpoints.between('xs', 'sm'));
  const tablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const laptop = useMediaQuery(theme.breakpoints.between('md', 'lg'));
  const desktop = useMediaQuery(theme.breakpoints.between('lg', 'xl'));
  const largescreen = useMediaQuery(theme.breakpoints.up('xl'));


  return (
    <Grid direction={'column'} justifyContent={'space-between'} sx={{ overflowX: 'hidden', maxWidth: '100%' }}>
      <Grid container item direction={'row'}>
        <Firstrow />
      </Grid>
      <Grid item>
        <img style={{
          marginTop: phone ? '10vh' : tablet ? '5vh' : smallphone ? '10vh' : '',
          marginLeft: '8vw',
          width: phone ? '20vw' : tablet ? '15vw' : smallphone ? '15vw' : '5vw'
        }}
          src={introcube} alt='cube' />
      </Grid>
      <Grid>
        <img style={{
          width: phone ? '20vw' : tablet ? '16vw' : '14vw',
          position: 'absolute',
          top: phone ? '18vh' : tablet ? '15vh' : smallphone ? '15vh' : '8vh',
          right: phone ? '12vw' : smallphone ? '15vw' : '18vw'
        }}
          src={introstairs} alt='stairs' />
      </Grid>

      <CenterRow />


      <Grid>
        <img style={{
          width: phone ? '20vw' : tablet ? '15vw' : smallphone ? '20vw' : '13vw',
          position: 'absolute',
          bottom: phone ? '27vh' : tablet ? '25vh' : smallphone ? '40vh' : '5vh',
          left: phone ? '7vw' : smallphone ? '2vh' : '8vw'
        }}
          src={introhalfcubes} alt='intropillar' />
      </Grid>

      <Grid>
        <img style={{
          width: phone ? '30vw' : tablet ? '20vw' : smallphone ? '20vw' : '',
          position: 'absolute',
          right: phone ? '8vw' : tablet ? '5vw' : smallphone ? '6vw' : '25vw',
          bottom: phone ? '26vh' : tablet ? '25vh' : smallphone ? '40vh' : '-2vh'
        }}
          src={intropillar} alt='introcubes' />
      </Grid>

      <Footer />
    </Grid>
  )
}

export default AdvertisementPage