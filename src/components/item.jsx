import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { makeStyles} from '@material-ui/styles'

const useStyles=makeStyles(theme=>({
  headerTitle:{
    minHeight:'72px',
    [theme.breakpoints.down('sm')]:{
      height:'auto'
    }
  },
  img:{
    height:'250px',
    width:'300px',
    marginBottom:'2rem',
    [theme.breakpoints.down('xs')]:{
      height:'210px',
      width:'250px',
     } 
  },
  itemDesc:{
     minHeight:'170px',
     maxWidth:'400px',
     padding:'0 2rem',
     [theme.breakpoints.down('sm')]:{
      minHeight:'auto',
     } 
  }
}))


const Item=({headerTitle,imgSrc,imgName,itemName,itemDesc})=> {
  const classes=useStyles()

  return(
    <Grid  container direction='column' justify='center' alignItems='center' >
      <Grid item style={{textAlign:'center'}} >
        <img src={imgSrc} alt={imgName} height='100%' width='100%' className={classes.img} />
      </Grid>
      <Grid item>
        <Typography variant="h3" align='center' className={classes.headerTitle}  >{headerTitle}</Typography>
      </Grid>
      <Grid item >
        <Typography variant="subtitle1" align='center' paragraph  >{itemName}</Typography>
      </Grid>
      <Grid item>
        <Typography variant="body1" align='center' className={classes.itemDesc}  >{itemDesc}</Typography>
      </Grid>
    </Grid>
  )
 
}

export default Item
