import React from 'react';
import { useEffect, useState } from "react";

import { RiHomeGearLine, RiWhatsappLine } from 'react-icons/ri';


function Sidebar() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        console.log("veri alinisyor");
        fetch("https://601d848abe5f340017a19c29.mockapi.io/dashboard").then(res => {
            res.json().then((data) => setPosts(data.user));/* data.user dedık cunku user ana baslık */

        });
    }, []);

    const [post, setBoard] = useState([]);
    useEffect(() => {
        fetch("https://601d848abe5f340017a19c29.mockapi.io/menu").then(res => {
            res.json().then((data) => setBoard(data));

        })

    })

    return (
        <div className="side-bar active">
            <div className="flex-container"> <img className="img" src="https://i.ibb.co/swkR93p/bramdejager-600x600.png" />
                <div className="flex-container2"> <h4>{posts && posts.name}</h4>
                    <div className="id"> <h4>{posts.id && posts.id.title}:</h4>
                        <h4>{posts.id && posts.id.value}</h4></div>




                </div>
            </div>
            <div className="profile-class"><button className="profile-button">View Profile</button></div>


            <div className="menü-container"> {post.map((post, index) => (
                <h4  ><a className="menü-item" href={post.link}> <RiHomeGearLine size={40} color="#8e66db" /> {post.name}</a> </h4>

            ))}
            </div>

        </div>






    )
}

export default Sidebar
