import { Box, Typography } from "@mui/material"
import { useState } from "react"
import { useEffect, useRef } from "react"

const CutTextAnim = (prop) =>{
    return(
        <>
          <Box right={prop.animProps} top={prop.animPropsTop} position={'absolute'}  height={'45%'} marginRight={'8.49px'} id='topText' overflow={'clip'} sx={{rotate:'-5deg', transition:prop.test, transitionDelay:prop.transitionDelay}}>
          <Typography color={prop.textColor} id='topText' sx={{rotate:'5deg',fontSize:'1.5rem', fontFamily:'HyruleFont', transition:prop.textColorTransition}}>Enemies</Typography>
          </Box>
          <Box id='bottomText'  overflow={'clip'} top={'41%'} marginLeft={'10px'} position={'absolute'} sx={{rotate:'-5deg'}}>
          <Typography color={prop.textColor} sx={{marginTop:'-18%', fontSize:'1.5rem', fontFamily:'HyruleFont', rotate:'5deg', transition:prop.textColorTransition}}>Enemies</Typography>
          </Box>
        </>
    )
}


const EnemiesBtn = () =>{
    const [animProps, setAnimProps] = useState('0%')
    const [animPropsTop, setAnimPropsTop] = useState('0%')
    const [test, settest] = useState('right 1.5s, top 1.5s')
    const [animState, setAnimState] = useState('first')
    const [textColor, setTextColor] = useState('white')
    const [textColorTransition, setTextColorTransition] = useState('color 3s')
    const [cancelAnim, setCancelAnim] = useState(false)
    const [transitionDelay, setTransitionDelay] = useState('3000ms')
    const [showSlash, setShowSlash] = useState('none')
    const [showSlashTrigger, setShowSlashTrigger] = useState(false)
    const [cursorState, setCursorState] = useState(true)

    
    useEffect(() => {
        if(cursorState && showSlashTrigger){
        setShowSlash('block')
        document.getElementById('slashAnimation').src = '../../../public/Gifs/SlashAnimation.gif'
        setTimeout(() => {
            document.getElementById('slashAnimation').src = ''
            setCursorState(false)
        }, 500);

        setTextColorTransition('color 0.1s')
        setTextColor('gray')
        setTimeout(() => {
            setTextColorTransition('color 0.3s')
        setTextColor('white')
        }, 200);

    }
    }, [cursorState, showSlashTrigger])

    

    useEffect(() => {
        const audio = document.getElementById('test1')
            document.getElementById('topText').addEventListener('transitionend',() =>{
                console.log('si')
                setAnimProps('4%')
                setAnimPropsTop('0%')
                settest('right 1.5s, top 1.5s')
                setShowSlashTrigger(true)
            })

            document.getElementById('outerEnemiesBox').addEventListener('mouseenter', () =>{
               setCancelAnim(false)
               audio.play()
               setTransitionDelay('3000ms')
               setTextColorTransition('color 3.3s')
               setTextColor('red')
            })
            document.getElementById('outerEnemiesBox').addEventListener('mouseleave', () =>{
                audio.currentTime = 0
                audio.pause()
                setCursorState(true)
                setShowSlashTrigger(false)
                setTransitionDelay('0ms')
                setCancelAnim(true)
                setTextColor('white')
                setAnimProps('0px')
                setAnimPropsTop('0%')
                settest('right 0s, top 0s')
                setTextColorTransition('color 0s')
             })
        
    }, [])
    
    return(
        <>
        <audio id="test1" src="'../../../public/Sounds/MonstersSound1.mp3"></audio>
        <Box  width={'100px'} height={'40px'} overflow={'clip'} id='outerEnemiesBox' position={'relative'}>
           <img id="slashAnimation" style={{width:'100px',rotate:'47deg', top:'-30px', left:'-19%', position:'absolute', zIndex:'1', display:showSlash}} src="'../../../public/Gifs/SlashAnimation.gif" alt="" />
            <CutTextAnim {...{animProps, test, textColor,textColorTransition,transitionDelay,animPropsTop}}/>
        </Box>
        </>
    )
}

export default EnemiesBtn