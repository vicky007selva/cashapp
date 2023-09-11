import React from 'react'

//image imports
import apple from '../images/apple.svg'
import googleplay from '../images/googleplay.svg'
import frame from '../images/frame.svg'
import twitter from '../images/twitter.svg'
import instagram from '../images/instagram.svg'
import Downarrow from '../images/Downarrow.svg'

import { useTheme} from 'styled-components';
import useMediaQuery from '@mui/material/useMediaQuery';

//material ui imports
import Grid from '@mui/material/Grid';
import { Box, Typography } from '@mui/material';

const Footer = () => {
    const theme = useTheme();
    const phone = useMediaQuery(theme.breakpoints.between('xs','sm'));
    const tablet = useMediaQuery(theme.breakpoints.between('sm','md'));
    const laptop = useMediaQuery(theme.breakpoints.between('md','lg'));
    const desktop = useMediaQuery(theme.breakpoints.between('lg','xl'));
    const largescreen = useMediaQuery(theme.breakpoints.up('xl'));

    return (
        <Grid container item direction={'row'} >
            <Box sx={{ display: 'flex', flexDirection: 'row', gap: '1vw', marginTop: phone?'50rem':'38vh', padding: phone?'3rem':'1vw 2vw', position: 'absolute',
            left:phone?'8rem':'1.5vw',
            border:'0.1vw solid white',
            borderRadius:'0.5vw',
            backgroundColor:'black'
        }}>
                <img src={apple} alt='apple' />
                <Typography sx={{
                    color: '#FFF',
                    textAlign: 'center',
                    fontFamily: 'Helvetica Neue',
                    fontSize: phone?'2rem':'0.75rem',
                    fontStyle: 'normal',
                    fontWeight: 800,
                    lineHeight: '1.125rem',
                    letterSpacing: '0.03125rem',
                    textTransform: 'uppercase',
                }}>
                    APP_STORE
                </Typography>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'row', gap: '1vw', marginTop: phone?'50rem':'38vh', padding: phone?'3rem':'1vw 2vw', position: 'absolute',
            left:phone?'45rem':'15vw',
             border:'0.1vw solid white',
             borderRadius:'0.5vw',
             backgroundColor:'black'
         }} >
                <img src={googleplay} alt='playstore' />
                <Typography sx={{
                    color: '#FFF',
                    textAlign: 'center',
                    fontFamily: 'Helvetica Neue',
                    fontSize: phone?'2rem':'0.75rem',
                    fontStyle: 'normal',
                    fontWeight: 800,
                    lineHeight: '1.125rem',
                    letterSpacing: '0.03125rem',
                    textTransform: 'uppercase',
                }}>
                    PLAY_STORE
                </Typography>
            </Box>

            <Box sx={{ padding: '1vw',position:'absolute',left:phone?'4rem':'52vw',bottom:'2vh'}}>
                <img style={{width: phone?'4rem':'1.125vw'}} src={Downarrow} alt='downArrow'/>
            </Box>

            <Box sx={{ marginRight: '32vw', padding: '1vw' }}>
                <Typography sx={{
                    color: '#B6B6B6',
                    fontFamily: 'Mulish',
                    fontSize: phone?'2rem':'0.625rem',
                    fontStyle: 'normal',
                    fontWeight: 200,
                    lineHeight: phone?'2rem':'0.8125rem',
                    position: 'absolute',
                    right:phone?'-44rem':'22vw',
                    bottom: phone?'-75rem':'2vh',
                }}>
                    Brokerage services by Cash App Investing LLC, member FINRA / SIPC.<br />
                    See our BrokerCheck. Investing involves risk; you may lose money. Bitcoin <br />
                    trading offered by Cash App. Cash App Investing does not trade bitcoin and <br />
                    Cash App is not a member of FINRA or SIPC. Cash App facilitates banking <br />
                    services through Sutton Bank and Lincoln Savings Bank, Members FDIC.
                </Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row', gap: '1.5vw', marginLeft: phone?'26rem':'47vw', marginTop: phone?'60rem':'38vh' }}>
                <img style={{width:phone?'5rem':''}} src={frame} alt='frame' />
                <img style={{width:phone?'5rem':''}} src={twitter} alt='twitter' />
                <img style={{width:phone?'5rem':''}} src={instagram} alt='instagram' />
            </Box>
        </Grid>
    )
}

export default Footer