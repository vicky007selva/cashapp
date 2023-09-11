import React from 'react'

//image imports
import apple from '../images/apple.svg'
import googleplay from '../images/googleplay.svg'
import frame from '../images/frame.svg'
import twitter from '../images/twitter.svg'
import instagram from '../images/instagram.svg'
import Downarrow from '../images/Downarrow.svg'

import { useTheme } from 'styled-components';
import useMediaQuery from '@mui/material/useMediaQuery';

//material ui imports
import Grid from '@mui/material/Grid';
import { Box, Typography } from '@mui/material';

const Footer = () => {
    const theme = useTheme();
    const smallphone = useMediaQuery(theme.breakpoints.between('xxs', 'xs'));
    const phone = useMediaQuery(theme.breakpoints.between('xs', 'sm'));
    const tablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
    const laptop = useMediaQuery(theme.breakpoints.between('md', 'lg'));
    const desktop = useMediaQuery(theme.breakpoints.between('lg', 'xl'));
    const largescreen = useMediaQuery(theme.breakpoints.up('xl'));

    return (
        <Grid container item direction={phone || smallphone || tablet ? 'column' : 'row'} >
            <Box sx={{
                display: 'flex', flexDirection: 'row', gap: '1vw',
                marginTop: phone ? '35vh' : tablet ? '30vh' : smallphone ? '20vh' : '38vh',
                padding: phone ? '2vw 4vw' : '1vw 2vw', position: 'absolute',
                left: phone ? '6vw' : tablet ? '30vw' : smallphone ? '4vw' : '1.5vw',
                border: '0.1vw solid white',
                borderRadius: phone ? '1vw' : '0.5vw',
                backgroundColor: 'black'
            }}>
                <img src={apple} alt='apple' />
                <Typography sx={{
                    color: '#FFF',
                    textAlign: 'center',
                    fontFamily: 'Helvetica Neue',
                    fontSize: phone ? '0.9rem' : '0.75rem',
                    fontStyle: 'normal',
                    fontWeight: 800,
                    lineHeight: '1.125rem',
                    letterSpacing: '0.03125rem',
                    textTransform: 'uppercase',
                }}>
                    APP_STORE
                </Typography>
            </Box>

            <Box sx={{
                display: 'flex', flexDirection: 'row', gap: '1vw',
                marginTop: phone ? '35vh' : tablet ? '30vh' : smallphone ? '20vh' : '38vh',
                padding: phone ? '2vw 4vw' : '1vw 2vw', position: 'absolute',
                left: phone ? '50vw' : tablet ? '50vw' : smallphone ? '50vw' : '15vw',
                border: '0.1vw solid white',
                borderRadius: phone ? '1vw' : '0.5vw',
                backgroundColor: 'black'
            }} >
                <img src={googleplay} alt='playstore' />
                <Typography sx={{
                    color: '#FFF',
                    textAlign: 'center',
                    fontFamily: 'Helvetica Neue',
                    fontSize: phone ? '0.9rem' : '0.75rem',
                    fontStyle: 'normal',
                    fontWeight: 800,
                    lineHeight: '1.125rem',
                    letterSpacing: '0.03125rem',
                    textTransform: 'uppercase',
                }}>
                    PLAY_STORE
                </Typography>
            </Box>

            <Box sx={{
                padding: '1vw',
                position: 'absolute',
                left: phone ? '41vw' : tablet ? '45vw' : smallphone ? '40vw' : '52vw',
                bottom: phone ? '-4vh' : tablet ? '0vh' : smallphone ? '16vh' : '2vh'
            }}>
                <img style={{ width: phone ? '10vw' : tablet ? '5vw' : smallphone ? '8vw' : '1.125vw' }} src={Downarrow} alt='downArrow' />
            </Box>

            <Box sx={{ marginRight: '32vw', padding: '1vw', width: phone ? '100%' : '' }}>
                <Typography sx={{
                    color: '#B6B6B6',
                    fontFamily: 'Mulish',
                    fontSize: phone ? '0.6rem' : tablet ? '1rem' : smallphone ? '0.4rem' : '0.625rem',
                    fontStyle: 'normal',
                    fontWeight: 200,
                    lineHeight: phone ? '1rem' : tablet ? '1rem' : '0.8125rem',
                    position: 'absolute',
                    right: phone ? '8vw' : tablet ? '17vw' : smallphone ? '18vw' : '22vw',
                    bottom: phone ? '-22vh' : tablet ? '-10vh' : smallphone ? '4vh' : '2vh',
                }}>
                    Brokerage services by Cash App Investing LLC, member FINRA / SIPC.<br />
                    See our BrokerCheck. Investing involves risk; you may lose money. Bitcoin <br />
                    trading offered by Cash App. Cash App Investing does not trade bitcoin and <br />
                    Cash App is not a member of FINRA or SIPC. Cash App facilitates banking <br />
                    services through Sutton Bank and Lincoln Savings Bank, Members FDIC.
                </Typography>
            </Box>
            <Box sx={{
                display: 'flex', flexDirection: 'row', gap: '1.5vw',
                marginLeft: phone ? '30vw' : tablet ? '43vw' : smallphone?'25vw':'47vw',
                marginTop: phone ? '80vh' : tablet ? '55vh' : smallphone?'50vh':'38vh',
                padding: phone || tablet ? '1rem' : smallphone?'1rem': ''
            }}>
                <img style={{ width: phone ? '2rem' : '' }} src={frame} alt='frame' />
                <img style={{ width: phone ? '2rem' : '' }} src={twitter} alt='twitter' />
                <img style={{ width: phone ? '2rem' : '' }} src={instagram} alt='instagram' />
            </Box>
        </Grid>
    )
}

export default Footer