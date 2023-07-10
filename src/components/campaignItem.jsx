import React from 'react'
import {Grid, Button, Typography,Hidden,useMediaQuery} from '@material-ui/core'
import {makeStyles,useTheme} from '@material-ui/core/styles'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import FavoriteIcon from '@material-ui/icons/Favorite'
import AddCircleIcon from '@material-ui/icons/AddCircle'
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle'


import Item from './item'
import CircularProgressBar from './circular-progress bar'
import WinBadge from './winBadge'
import AddSubButtonBadge from './addSubButtonBadge'
import PriceBadge from './priceBadge'


const useStyles=makeStyles(theme=>({
    campaignItem:{
      boxShadow:theme.shadows[20],
      borderRadius:'50px',
      padding:'3rem 1rem 3rem 2rem',
      position:'relative',
      [theme.breakpoints.down('sm')]:{
        padding:'2rem 0 '
      }
    },
    progressBar:{
      position:'absolute',
      top:'-110px',
      width:'230px',
      left:'calc(50% - 115px )',
      [theme.breakpoints.down('sm')]:{
        top:'-160px',
  
      },
      [theme.breakpoints.down('xs')]:{
        top:'-130px',
        left:'calc(50% - 85px )',
        width:'170px',
      }
    },
    progressBarText:{
      backgroundColor:'white',
      boxShadow:theme.shadows[2],
      borderRadius:'500px',
      padding:'30px',
      width:'175px',
      height:'175px',
      position:'absolute',
      left:'27.5px',
      top:'47.5px',
      [theme.breakpoints.down('xs')]:{
        width:'130px',
        height:'130px',
        left:'20.5px',
        top:'40.5px',
        padding:'5px',
      }
  
    },
    priceBadgeBlock:{
      position:'absolute',
      top:'-3rem',
      left:'-1.3rem',
      [theme.breakpoints.down('sm')]:{
        top:'0'
      }
    },
    winBadge:{
      position:'absolute',
      top:'73px',
      left:'50%',
      width:'200px'
    },
    addSubButtonBadge:{
      position:'absolute',
      right:'calc(0% - 61px)',
    },
    addSubIcons:{
        backgroundColor:'white',
        borderRadius:'30px',
        fontSize:'2.5rem',
        marginRight:0,
        '&:hover':{
          cursor: 'pointer'
        },
      },
    showCartText:{
      borderRadius:'20px',
      backgroundColor:theme.palette.secondary.main,
      width:'270px',
      height:'50px',
      marginTop:'1rem',
      [theme.breakpoints.down('xs')]:{
        width:'210px'
      }
    },
    actionButton:{
      width:'50px',
      height:'50px',
      minWidth:'40px',
      borderRadius:'10px',
      backgroundColor:theme.palette.primary.main,
      '&:hover':{
        backgroundColor:theme.palette.primary.light,
      },
      [theme.breakpoints.down('xs')]:{
        width:'35px',
        height:'35px',
        minWidth:'30px',
        borderRadius:'7px',
  
      }
    },
    actionIcon:{
      color:'white',
      fontSize:'2.5rem',
      [theme.breakpoints.down('xs')]:{
        fontSize:'1.8rem',
      }
    },
    actionButtonCart:{
      backgroundColor:theme.palette.secondary.main,
      '&:hover':{
        backgroundColor:theme.palette.secondary.light
      }
    }
  }))

const CampaignItem = ({isFavorite,product_quantity,quantity_sold,product_price,product_id,prize_id}) => {
    const classes=useStyles()
    const theme=useTheme()
    const matchSM=useMediaQuery(theme.breakpoints.down('sm'))
    const matchXS=useMediaQuery(theme.breakpoints.down('xs'))
    return (
        <Grid container direction={matchSM? 'column':'row'} alignItems='center' className={classes.campaignItem} >

            <Grid item container  className={classes.progressBar} >
              <Grid item style={{transform:'rotate(-90deg)'}}>
                <CircularProgressBar  
                progress={(quantity_sold / product_quantity) * 100}
                size={matchXS?170:230}
                strokeWidth={15}
                circleOneStroke='#E1CFEA'
                circleTwoStroke={theme.palette.secondary.main}
                />
              </Grid>
                <Grid item  className={classes.progressBarText}>
                  <Typography variant="h3" align='center' style={{color:theme.palette.primary.main}} >{quantity_sold}</Typography>
                  <Typography variant="subtitle2" align='center' >sold</Typography>
                  <Typography variant="body1" align='center' >out of <br/> {product_quantity}</Typography>
                </Grid>
            </Grid>

            <Hidden smDown>
              <Grid item  className={classes.addSubButtonBadge} >
                <AddSubButtonBadge/>
              </Grid>
            </Hidden>

            <Grid item  className={classes.priceBadgeBlock}  >
                <PriceBadge product_price={product_price}/>
            </Grid>
            {
              prize_id.is_prize?
              <Hidden smDown>
                <Grid item container justify='center' alignItems='center'className={classes.winBadge}>
                  <WinBadge/>
                </Grid>
              </Hidden>
              :
              <React.Fragment/>
            }
            

            <Hidden mdUp>
            <Grid item container justify='flex-end' alignItems='center' spacing={1} style={{paddingRight:'0.5rem'}}>
              <Grid item >
                <Button className={classes.actionButton}>
                  <FavoriteIcon className={classes.actionIcon} />
                </Button>
              </Grid>
              <Grid item >
                <Button className={`${classes.actionButton} ${classes.actionButtonCart}`}>
                  <ShoppingCartIcon className={classes.actionIcon}/>
                </Button>
              </Grid>
            </Grid>
            </Hidden>


            <Grid item  md style={{marginTop:matchSM?'5rem':'9rem'}}>
              <Item 
              headerTitle='Buy a'
              imgSrc={product_id.image}
              itemName={product_id.name}
              itemDesc={product_id.description}
              />
            </Grid>
            
            <Hidden mdUp>
              <Grid item container direction='column' style={{margin:'4rem 0'}} alignItems='center'  >
                <Grid item container direction='row' justify='center' alignItems='flex-end'   >
                  <Grid item>
                      <RemoveCircleIcon color='secondary' className={classes.addSubIcons}    />
                  </Grid>
                  <Grid item>
                    <Typography variant="subtitle1" color='secondary' style={{padding:matchXS?'0 3rem':'0 5rem'}} >1</Typography>
                  </Grid>
                  <Grid item>
                      <AddCircleIcon  color='secondary' className={classes.addSubIcons}    />
                  </Grid>
                </Grid>
                <Grid item container alignItems='center' justify='center' className={classes.showCartText} >
                  <Typography variant="h4" align='center'>Show your cart</Typography>
                </Grid>
              </Grid>
            </Hidden>

            <Grid item  md style={{marginTop:matchSM?'2rem':'9rem'}}>
              <Item 
              headerTitle='Get a chance to win:'
              imgSrc={prize_id.image}
              itemName={prize_id.name}
              itemDesc={prize_id.description}
              />
            </Grid>

            <Hidden smDown>
            <Grid item container direction='column' md={1} justify='center' alignItems='center' spacing={2}>
              <Grid item >
                <Button className={classes.actionButton}>
                  <FavoriteIcon className={classes.actionIcon} style={{color:isFavorite?'red':'white'}}/>
                </Button>
              </Grid>
              <Grid item >
                <Button className={`${classes.actionButton} ${classes.actionButtonCart}`}>
                  <ShoppingCartIcon className={classes.actionIcon}/>
                </Button>
              </Grid>
            </Grid>
            </Hidden>

          </Grid>
          
    )
}

export default CampaignItem;