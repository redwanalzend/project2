
import { createMuiTheme } from '@material-ui/core/styles'

const arcPurple='#330863'
const arcLightPurple='#7F1AA8'



 const theme = createMuiTheme({
    palette:{
        primary:{
            main:arcPurple
        },
        secondary:{
            main:arcLightPurple
        }
    },
    typography:{
        h3:{
            fontSize:'1.9rem',
            fontWeight:'800',
            color:arcPurple
        },
        h4:{
            fontSize:'1.6rem',
            fontWeight:'600',
            color:'white'
        },
        subtitle1:{
            fontSize:'1.7rem',
            fontWeight:'800',
            color:'#2A2A2A'
        },
        subtitle2:{
            fontSize:'1.5rem',
            fontWeight:'600',
            color:'#2A2A2A'
        },
        body1:{
            fontSize:'1.1rem',
            fontWeight:'300',
            color:'#6D6D6D'
        },
    }
 })

 export default theme