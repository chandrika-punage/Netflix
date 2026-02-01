import React from 'react'
import './featured.scss'
import { InfoOutlined, PlayArrow } from '@mui/icons-material'

const Featured = ({ type }) => {
    return (
        <div className='featured'>
            {type && (
                <div className='category'>
                    <span>{type === "movie" ? "Movies" : "Series"}</span>
                    <select name='genre' id="genre">
                        <option>Genre</option>
                        <option value="adventure">Adventure</option>
                        <option value="comedy">Comedy</option>
                        <option value="crime">Crime</option>
                        <option value="fantasy">Fantasy</option>
                        <option value="historical">Historical</option>
                        <option value="horror">Horror</option>
                        <option value="sci-fi">Sci-fi</option>
                        <option value="thriller">Thriller</option>
                        <option value="western">Western</option>
                        <option value="animation">Animation</option>
                        <option value="drama">Drama</option>
                        <option value="documentary">Documentary</option>

                    </select>
                </div>
            )}
            <img
                src='https://images.pexels.com/photos/10041230/pexels-photo-10041230.jpeg'
                alt=''
            />

            <div className="info">
                <img
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnANx3Pzgf8rHdae8ogZlmrqUvE2F-jpcGyg&s'
                    alt=''
                />

                <span className="desc">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's standard
                    dummy text ever since the 1500s, when an unknown printer took a galley
                    of type and scrambled it to make a type specimen book. It has survived
                    not only five centuries, but also the leap into electronic typesetting,
                    remaining essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum passages, and more
                    recently with desktop publishing software like Aldus PageMaker including
                    versions of Lorem Ipsum.
                </span>

                <div className="buttons">
                    <button className='play'>
                        <PlayArrow />
                        <span>Play</span>

                    </button>
                    <button className='more'>
                        <InfoOutlined />
                        <span>Info</span>

                    </button>
                </div>

            </div>

        </div>
    )
}

export default Featured