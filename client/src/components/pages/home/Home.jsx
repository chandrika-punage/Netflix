import React from 'react'
import "./home.scss"
import Navbar from '../../Navbar/Navbar'
import Featured from '../../featured/Featured'
import List from '../../list/List'


const Home = () => {
    return (
        <div className="home">
            <Navbar />
            <Featured />
            <List/>
            <List/>
            <List/>
            <List/>

          
        </div>
    )
}

export default Home