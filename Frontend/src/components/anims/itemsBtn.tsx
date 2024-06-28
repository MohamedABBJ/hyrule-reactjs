import { Box, Typography } from "@mui/material"
import { useEffect, useState } from "react"

const ItemsBtn = () =>{
    const [textAnimation, setTextAnimation] = useState('0px')
    const [rupeeAnimation, setRupeeAnimation] = useState('500px')
    const [cursorState, setCursorState] = useState('out')
    const [transitionState, setTransitionState] = useState('start')

    useEffect(() => {
        if(cursorState == 'in' && transitionState == 'end'){
            setRupeeAnimation('0px')
        }
    }, [cursorState, transitionState])
    

    useEffect(() => {
        const audio = document.getElementById('item-sound')

        document.getElementById('itemsBox').addEventListener('transitionend',()=>{
           setTransitionState('end')
        })
        document.getElementById('itemsBox').addEventListener('mouseenter',()=>{
            audio.play()
            setTextAnimation('500px')
            setCursorState('in')

        })
        document.getElementById('itemsBox').addEventListener('mouseleave',()=>{
            audio.pause()
            audio.currentTime = 0
            setCursorState('out')
            setTextAnimation('0px')
            setRupeeAnimation('500px')
            setTransitionState('end')
        })

    }, [])
    

    return(
        <>
        <audio id="item-sound" src="'../../../public/Sounds/ItemSound.mp3"></audio>
            <Box display={'flex'} width={'100%'} height={'100vh'} justifyContent={'center'} alignItems={'center'}>
                <Box overflow={'clip'} display={'flex'} alignItems={'center'} justifyContent={'center'} width={'150px'} height={'100px'} position={'relative'} id='itemsBox' border={'solid'}>
                <Typography marginTop={textAnimation} position={'absolute'} sx={{fontSize:'30px', transition:'margin-top 1s'}}>Items</Typography>
                <img style={{position:'absolute', width:'100%', transition:'margin-bottom 1s', marginBottom:rupeeAnimation}} src="../../../public/Gifs/itemsAnimationRupee.gif" alt="" />
                </Box>
            </Box>
        </>
    )
}

export default ItemsBtn