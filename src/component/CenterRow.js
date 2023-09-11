import React from 'react'

import { useTheme} from 'styled-components';
import useMediaQuery from '@mui/material/useMediaQuery';

//image imports 
import introphone from '../images/introphone.png'

//import material ui
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';

const CenterRow = () => {

    const theme = useTheme();
    const smallphone = useMediaQuery(theme.breakpoints.between('xxs','xs'));
    const phone = useMediaQuery(theme.breakpoints.between('xs','sm'));
    const tablet = useMediaQuery(theme.breakpoints.between('sm','md'));
    const laptop = useMediaQuery(theme.breakpoints.between('md','lg'));
    const desktop = useMediaQuery(theme.breakpoints.between('lg','xl'));
    const largescreen = useMediaQuery(theme.breakpoints.up('xl'));

    console.log('smallphone'+smallphone)
    console.log('phone'+phone)
    console.log('tablet'+tablet)
    console.log('laptop'+laptop)
    console.log('desktop'+desktop)
    console.log('largescreen'+largescreen)
    return (
        <Grid sx={{position:'relative'}}>
            <Grid sx={{ marginTop: phone?'0vh':tablet?'30vw':'6vw' }}>
                <Typography sx={{
                    color: '#FFF',
                    textAlign: 'center',
                    fontFamily: 'Helvetica Neue',
                    fontSize: phone?'6rem':smallphone?'4rem':'12.0625rem',
                    fontStyle: 'normal',
                    fontWeight: 800,
                    lineHeight: '10.375rem', /* 86.01% */
                    letterSpacing: '0.03125rem',
                    textTransform: 'uppercase'
                }}>
                    CASH
                </Typography>
            </Grid>

            <Grid >
                <img style={{ 
                    width: phone?'40vw':tablet?'40vw':smallphone?'42vw':'23vw', 
                    marginLeft: phone?'30vw':tablet?"32vw":smallphone?'30vw':'39vw', 
                    position: 'absolute', 
                    top: phone?'5vh':smallphone?'6vh':'-4vh' }} 
                    src={introphone} alt="phone" />
            </Grid>

            <Grid >
                <Typography sx={{
                    color: '#FFF',
                    textAlign: 'center',
                    fontFamily: 'Helvetica Neue',
                    fontSize: phone?'6rem':smallphone?'4rem':'12.0625rem',
                    fontStyle: 'normal',
                    fontWeight: 800,
                    lineHeight: '10.375rem', /* 86.01% */
                    letterSpacing: '0.03125rem',
                    textTransform: 'uppercase',
                    position: 'absolute',
                    top: phone?'12vh':smallphone?'9vh':'',
                    left: phone?'22vw':smallphone?'28vw':tablet?'27vw':'36vw',
                }}>
                    APP
                </Typography>
            </Grid>
        </Grid>
    )
}

export default CenterRow