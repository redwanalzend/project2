import React, { useEffect } from 'react';
import {useDispatch,useSelector} from 'react-redux'

import {Grid, Typography} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'

import {fetchCampaign} from './redux/campaignSlice'


import CampaignItem from './components/campaignItem'





const useStyles=makeStyles(theme=>({
  mainContainer:{
    minHeight:'100vh',
    padding:'10rem 12% 4rem 12%',
    [theme.breakpoints.down('sm')]:{
      padding:'10rem 6% 4rem 6%'
    }
  },
  campaignItem:{
    marginBottom:'12rem',
    '&:last-child':{
      marginBottom:'0',
    }
  }
}))

const App=()=> {
  const classes=useStyles()
  const dispatch =useDispatch()

  
  useEffect(()=>{
    dispatch(fetchCampaign())
  },[])



  const data=useSelector(state=>state.campaign.data)
  const isFetching=useSelector(state=>state.campaign.isFetching)



  return(
    <Grid container direction='column' className={classes.mainContainer} >
      {
        isFetching?
        <Grid item >
         <Typography variant="h2" align='center' >fetching data...</Typography> 
        </Grid>
        :
        data.map(campaignItem=>(
          <Grid item className={classes.campaignItem} key={campaignItem.id}>
            <CampaignItem  {...campaignItem} />
          </Grid>
        ))
      }
    </Grid>
  )
 
}

export default App;
