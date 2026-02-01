import React, { useState } from 'react'
import './listItem.scss'
import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpOutlined } from '@mui/icons-material'

const ListItem = ({ index }) => {

    const [isHovered, setIsHovered] = useState(false)

    return (
        <div className='listItem'

            style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <img
                src='https://wallpapercave.com/wp/wp1917154.jpg'
                alt=''
            />
            {isHovered && (
                <>
                    <video src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" autoPlay={true} loop />
                    <div className="itemInfo">
                        <div className="icons">
                            <PlayArrow className='icon'/>
                            <Add className='icon'/>
                            <ThumbUpOutlined className='icon'/>
                            <ThumbDownAltOutlined className='icon'/>
                        </div>
                        <div className="itemInfoTop">
                            <span>1 hour 14 mins</span>
                            <span className=' limit'>+16</span>
                            <span>1999</span>
                        </div>

                        <div className="desc">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text.
                        </div>
                        <div className="genre">Action</div>
                    </div>
                </>
            )}
        </div>
    )
}

export default ListItem