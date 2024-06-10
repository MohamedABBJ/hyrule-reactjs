import { Box, Typography } from "@mui/material"
import { useState } from "react"
import { useEffect, useRef } from "react"

const CutTextAnim = (prop) =>{
    return(
        <>
          <Box right={prop.animProps} top={prop.animPropsTop} position={'absolute'}  id='topText' overflow={'clip'} height={'40px'} sx={{rotate:'-12deg', transition:prop.test, transitionDelay:prop.transitionDelay}}>
          <Typography color={prop.textColor} id='topText' sx={{fontSize:'50px', rotate:'12deg', transition:prop.textColorTransition}}>Enemies</Typography>
          </Box>
          <Box id='bottomText' overflow={'clip'}  position={'absolute'}  height={'40px'} marginTop={'38px'} marginLeft={'10px'} sx={{rotate:'-12deg'}}>
          <Typography color={prop.textColor} marginTop={'-39px'} sx={{fontSize:'50px', rotate:'12deg', transition:prop.textColorTransition}}>Enemies</Typography>
          </Box>
        </>
    )
}


const EnemiesBtn = () =>{
    const [animProps, setAnimProps] = useState('0px')
    const [animPropsTop, setAnimPropsTop] = useState('0px')
    const [test, settest] = useState('right 1.5s, top 1.5s')
    const [animState, setAnimState] = useState('first')
    const [textColor, setTextColor] = useState('black')
    const [textColorTransition, setTextColorTransition] = useState('color 3s')
    const [cancelAnim, setCancelAnim] = useState(false)
    const [transitionDelay, setTransitionDelay] = useState('2000ms')
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
        setTextColor('black')
        }, 200);

    }
    }, [cursorState, showSlashTrigger])

    

    useEffect(() => {
        const audio = document.getElementById('test1')
            document.getElementById('topText').addEventListener('transitionend',() =>{
                console.log('si')
                setAnimProps('8px')
                setAnimPropsTop('3px')
                settest('right 1.5s, top 1.5s')
                setShowSlashTrigger(true)
            })

            document.getElementById('outerEnemiesBox').addEventListener('mouseenter', () =>{
               setCancelAnim(false)
               audio.play()
               setTransitionDelay('2000ms')
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
                setTextColor('black')
                setAnimProps('0px')
                setAnimPropsTop('0px')
                settest('right 0s, top 0s')
                setTextColorTransition('color 0s')
             })
        
    }, [])
    
    return(
        <>
        <audio id="test1" src="'../../../public/Sounds/MonstersSound1.mp3"></audio>
        <Box display={'flex'} justifyContent={'center'} alignItems={'center'} width={'100%'} height={'100vh'}>
           <Box border={'solid'} width={'200px'} overflow={'clip'} id='outerEnemiesBox' position='relative' height={'10%'}>
           <img id="slashAnimation" style={{width:'200px',rotate:'40deg', position:'absolute', top:'-50px', zIndex:'1', display:showSlash}} src="'../../../public/Gifs/SlashAnimation.gif" alt="" />
            <CutTextAnim {...{animProps, test, textColor,textColorTransition,transitionDelay,animPropsTop}}/>
           </Box>
        </Box>
        </>
    )
}

export default EnemiesBtn