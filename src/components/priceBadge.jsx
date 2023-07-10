import React from 'react'
import {Grid, Typography} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'

const useStyles=makeStyles(theme=>({
    badge:{
      marginTop:'5rem',
      width:'250px',
      height:'50px',
      backgroundColor:theme.palette.secondary.main,
      boxShadow:theme.shadows[5],
      [theme.breakpoints.down('sm')]:{
        width:'220px'
      },
      [theme.breakpoints.down('xs')]:{
        width:'180px'
      }
    },
    badgeTriangle:{
      width:'20px',
      height:'20px',
      backgroundColor:theme.palette.secondary.dark,
      clipPath:'polygon(0 0, 100% 100%, 0 100%)',
      transform:'rotate(180deg)'
    },
    text:{
      color:'white',
      paddingTop:'0.3rem',
      [theme.breakpoints.down('xs')]:{
        fontSize:'1.2rem',
        paddingTop:'0.8rem'
      }
    }
  }))

    


const PriceBadge = ({product_price}) => {
    const classes=useStyles()

    return (
        <Grid container direction='column'   >
            <Grid item className={classes.badge} >
                <Typography variant="h3" align='center' className={classes.text} >AED {product_price.toFixed(2)}</Typography>
            </Grid>
            <Grid item className={classes.badgeTriangle}  />
        </Grid>
    )
}

export default PriceBadge;