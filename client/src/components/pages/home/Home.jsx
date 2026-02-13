import React from 'react'
import "./home.scss"
import Navbar from '../../Navbar/Navbar'
import Featured from '../../featured/Featured'
import List from '../../list/List'
import { useEffect, useState } from "react";
import axios from "axios";


const Home = ({ type }) => {

    const [lists, setLists] = useState([]);
    const [genre, setGenre] = useState(null);

    useEffect(() => {
        const getRandomLists = async () => {
            try {
                const res = await axios.get(
                    `lists${type ? "?type=" + type : ""}${genre ? "&genre=" + genre : ""}`,
                    {
                        headers: {
                            token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5OGMwNTYyYmI2NGE2ZTIyNmQzY2NlYSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTc3MDc5Mzk1OSwiZXhwIjoxNzcxMjI1OTU5fQ._U9AVibH86CybTkqcVW22HNU0Z5JukozStAifPFuXLI"
                        }
                    }
                );
                setLists(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        getRandomLists();
    }, [type, genre]);

    return (
        <div className="home">
            <Navbar />
            <Featured type={type} setGenre={setGenre} />
            {lists.map((list) => (
                <List list={list} />
            ))}
            
        </div>
    )
}

export default Home