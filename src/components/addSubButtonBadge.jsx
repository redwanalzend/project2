import React from 'react'
import {Grid,  Typography,} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import AddCircleIcon from '@material-ui/icons/AddCircle'
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle'




const useStyles=makeStyles(theme=>({
    addSubButtonBadge:{
        backgroundColor:theme.palette.primary.main,
        borderRadius:'0 300px 300px 0',
        width:'300px',
        height:'400px',
        clipPath:'inset(0 0 0 80%)',
      },
    addSubIcons:{
      backgroundColor:'white',
      borderRadius:'30px',
      fontSize:'2.5rem',
      marginRight:'1rem',
      '&:hover':{
        cursor: 'pointer'
      },
      [theme.breakpoints.down('sm')]:{
        marginRight:0,
        fontSize:'3rem',
      }
    }
  }))

const AddSubButtonBadge = () => {
    const classes=useStyles()

    return (
        <Grid container direction='column' justify='space-around' alignItems='flex-end' className={classes.addSubButtonBadge}  >
            <Grid item>
                <AddCircleIcon color='secondary' className={classes.addSubIcons} style={{marginTop:'3rem'}}   />
            </Grid>
            <Grid item>
                <Typography variant="subtitle1" style={{color:'white',paddingRight:'1.5rem'}} >1</Typography>
            </Grid>
            <Grid item>
                <RemoveCircleIcon  color='secondary' className={classes.addSubIcons}  style={{marginBottom:'3rem'}}  />
            </Grid>
        </Grid>
    )
}

export default AddSubButtonBadge;