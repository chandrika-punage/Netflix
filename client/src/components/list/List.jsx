import React, { useRef, useState } from 'react'
import './list.scss'
import { ArrowBackIosNew, ArrowForwardIos } from '@mui/icons-material'
import ListItem from '../listItem/ListItem'

const List = ({ list }) => {


    const [isMoved, setIsMoved] = useState(false)
    const [slideNumber, setSlideNumber] = useState(0)
    const [clickLimit, setClickLimit] = useState(window.innerWidth / 230);


    const listRef = useRef()

    const handleClick = (direction) => {
        setIsMoved(true)

        let distance = listRef.current.getBoundingClientRect().x - 58

        if (direction === "left" && slideNumber > 0) {
            setSlideNumber(slideNumber - 1)
            listRef.current.style.transform = `translateX(${230 + distance}px)`

        }
        console.log(distance)
        if (direction === "right" && slideNumber < 10 - clickLimit) {
            setSlideNumber(slideNumber + 1)
            listRef.current.style.transform = `translateX(${-230 + distance}px)`

        }

    }

    return (
        <div className='list'>
            <span className='listTitle'>{list.title}</span>
            <div className="wrapper">
                <ArrowBackIosNew className='sliderArrow left'
                    onClick={() => handleClick("left")}
                    style={{ display: !isMoved && "none" }}
                />

                <div className="container" ref={listRef}>
                    {list.content.map((item, i) => (
                        <ListItem index={i} item={item} />
                    ))}

                </div>
                <ArrowForwardIos className='sliderArrow right' onClick={() => handleClick("right")} />
            </div>

        </div>
    )
}

export default List