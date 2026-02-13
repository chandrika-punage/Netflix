import React, { useState, useEffect } from 'react'
import './listItem.scss'
import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpOutlined } from '@mui/icons-material'
import axios from "axios";
import {Link} from 'react-router-dom'


const ListItem = ({ index, item }) => {

    const [isHovered, setIsHovered] = useState(false)

    const [movie, setMovie] = useState(null);

    useEffect(() => {
        const getMovie = async () => {
            try {
                const res = await axios.get("/movies/find/" + item, {
                    headers: {
                        token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5OGMwNTYyYmI2NGE2ZTIyNmQzY2NlYSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTc3MDc5Mzk1OSwiZXhwIjoxNzcxMjI1OTU5fQ._U9AVibH86CybTkqcVW22HNU0Z5JukozStAifPFuXLI"
                    },
                });
                setMovie(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        getMovie();
    }, [item]);

    if (!movie) return null;


    return (
        <Link to="/watch" state={{ movie }}>

            <div className='listItem'

                style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <img
                    src={movie.img}
                    alt=''
                />
                {isHovered && (
                    <>
                        <video src={movie.trailer} autoPlay={true} loop />
                        <div className="itemInfo">
                            <div className="icons">
                                <PlayArrow className='icon' />
                                <Add className='icon' />
                                <ThumbUpOutlined className='icon' />
                                <ThumbDownAltOutlined className='icon' />
                            </div>
                            <div className="itemInfoTop">
                                <span>{movie.duration}</span>
                                <span className=' limit'>+{movie.limit}</span>
                                <span>{movie.year}</span>
                            </div>

                            <div className="desc">{movie.desc}</div>
                            <div className="genre">{movie.genre}</div>
                        </div>
                    </>
                )}
            </div>
        </Link>
    )
}

export default ListItem