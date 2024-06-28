import { Box, Button, Typography } from "@mui/material"
import React, { AudioHTMLAttributes, useState } from "react"
import { useEffect, useRef } from "react"

const EnemiesBtn = () =>{
    const [buttonAnimationProps, setButtonAnimationProps] = useState({
        textColor:'white',
        textColorTransition:'color 3s',
        topTextTransition:'left 1.5s, top 1.5s',
        topTextTrantisionDelay:'3000ms',
        topTextPositionTop:'12%',
        topTextPositionLeft:'6%'
    }) 
    const [playOnce, setPlayOnce] = useState(false)
    const [showSlash, setShowSlash] = useState('none')
    const audioSound = useRef<HTMLAudioElement>(null)
    const slashGif = useRef<HTMLImageElement>(null)

    const startAnimation = () =>{
        audioSound.current && audioSound.current.play()
        setShowSlash('none')
        setPlayOnce(true)
        setButtonAnimationProps(prevState => ({
            ...prevState,
            textColor:'red',
            textColorTransition:'color 3.3s',
            topTextTrantisionDelay:'3000ms'

        }))
        slashGif.current ? slashGif.current.src = '../../../public/Gifs/SlashAnimation.gif' : null
    }
    const cancelAnimation = () =>{
        audioSound.current ? audioSound.current.currentTime = 0 : null
        audioSound.current && audioSound.current.pause()
        setPlayOnce(false)
        setButtonAnimationProps(prevState => ({
            ...prevState,
            textColor:'white',
            textColorTransition:'color 0s',
            topTextTransition:'left 0s, top 0s',
            topTextTrantisionDelay:'0ms',
            topTextPositionTop:'12%',
            topTextPositionLeft:'6%',
        }))
    }
    const animationEnded = () =>{
        if(playOnce){
            setShowSlash('block')
            setButtonAnimationProps(prevState => ({
                ...prevState,
                topTextTransition:'left 1.5s, top 1.5s',
                topTextPositionTop:'13%',
                topTextPositionLeft:'2%',
                textColor:'gray',
                textColorTransition:'color 0.1s'
            }))
                setTimeout(() => {
                    slashGif.current ? slashGif.current.src = '' : null
                }, 500);
                setTimeout(() => {                
                    setButtonAnimationProps(prevState => ({
                        ...prevState,
                        textColor:'white',
                        textColorTransition:'color 0s'
                    }))
                }, 300);
            setPlayOnce(false)
        }

    }

    return(
        <>
        <audio ref={audioSound} id="sound1" src="../../../public/Sounds/MonstersSound1.mp3"></audio>
        <Button sx={{height:'100%', padding:'0 45px',  display:'flex', alignItems:'center'}} onMouseEnter={startAnimation} onMouseLeave={cancelAnimation} >
        <img ref={slashGif} id="slashAnimation" style={{width:'100px',rotate:'47deg', position:'absolute', bottom:'-60%', zIndex:'1', display:showSlash}} src="../../../public/Gifs/SlashAnimation.gif" alt="" />
    
          <Box onTransitionEnd={animationEnded} display={'flex'} position={'absolute'}  alignItems={'start'} left={buttonAnimationProps.topTextPositionLeft} top={buttonAnimationProps.topTextPositionTop} justifyContent={'center'} height={'35%'}  marginBottom={'auto'} overflow={'clip'}  sx={{rotate:'-5deg', transition:buttonAnimationProps.topTextTransition, transitionDelay:buttonAnimationProps.topTextTrantisionDelay}}>
            <Box color={buttonAnimationProps.textColor} sx={{rotate:'5deg', transition:buttonAnimationProps.textColorTransition}}>
            Enemies
            </Box>
          </Box>

         
          <Box bottom={'10%'} display={'flex'}  alignItems={'end'}  position={'absolute'} overflow={'clip'} height={'45%'}  sx={{rotate:'-5deg'}}>
            <Box color={buttonAnimationProps.textColor} sx={{rotate:'5deg', transition:buttonAnimationProps.textColorTransition}}>
            Enemies
            </Box>
          </Box>
         

          
        </Button>
        </>
    )
}

export default EnemiesBtn
