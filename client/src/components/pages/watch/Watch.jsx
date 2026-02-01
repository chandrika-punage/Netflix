import React from 'react'
import './watch.scss'
import { ArrowBackOutlined } from '@mui/icons-material'

const Watch = () => {
    return (
        <div className='watch'>
            <div className="back">
                <ArrowBackOutlined />
                Home
            </div>
            <video className='video'
                autoPlay progress controls
                src='https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4'
            />

        </div>
    )
}

export default Watch