import React, { useEffect, useState, useRef } from 'react'
import {makeStyles} from '@material-ui/core/styles'



const useStyles=makeStyles(theme=>({
    svg:{
        display: 'block',
        margin:'20px auto',
        maxWidth: '100%'
    },
    svgCircleBg:{
        fill: 'white'
    },
    svgCircle:{
        fill: 'none'
    },
    svgCircleText:{
       fontSize: '2rem',
        textAnchor:'middle',
        fill: '#fff',
        fontWeight: 'bold'
    }
}))

const CircularProgressBar=({
    size, 
    progress, 
    strokeWidth, 
    circleOneStroke, 
    circleTwoStroke})=> {

    const [offset, setOffset] = useState(0)
    const circleRef = useRef(null)

    const classes=useStyles()

    const center=size / 2
    const radius = (size / 2) - (strokeWidth / 2)
    const circumference = 2 * Math.PI * radius

    useEffect(() => {
        const progressOffset = (( progress) / 100) * circumference;
        setOffset(progressOffset)
        circleRef.current.style = 'transition: stroke-dasharray 850ms ease-in-out'
    }, [setOffset, circumference, progress, offset])

    return(
        <svg className={classes.svg} width={size} height={size}>
            <circle
            className={classes.svgCircleBg}
            stroke={circleOneStroke}
            cx={center}
            cy={center}
            r={radius}
            strokeWidth={strokeWidth}
            />
            <circle
            className={classes.svgCircle}
            ref={circleRef}
            stroke={circleTwoStroke}
            cx={center}
            cy={center}
            r={radius}
            strokeWidth={strokeWidth}
            strokeDasharray={`${offset} ${circumference}`}
            />
        </svg>
    )
    
}

export default CircularProgressBar
