import React,  { useState, useEffect } from 'react';
import axios from 'axios';
import DataHotel from "../card-blog-hotel/dataHoleFace";



const WeatherComponent = () => {


    let [users, setUsers] = useState(null);

    // useEffect(() => {
    //     axios.get('http://api.openweathermap.org/data/2.5/forecast?q=tashkent&appid=c19afd5e0aff5c584b9d45889a3a4cb7&units=metric').then((res) => {
    //         setPosts(res.data);
    //         console.log(posts);
    //         debugger
    //     })
    // }, []);

    useEffect(() => {
        axios
            .get("http://api.openweathermap.org/data/2.5/forecast?q=tashkent&appid=c19afd5e0aff5c584b9d45889a3a4cb7&units=metric")
            .then(response =>{
                debugger
                setUsers(response.data)
            });
    }, []);

 let card = null
    if (users){

            console.log(users.list[0].weather)

    }else {
        card = (<h1>Loading</h1>)
    }

    return(
        <div className="App">
            <h2>The JSON below is loaded from an external API!</h2>

            {
                card
            }
        </div>

    )
};


export default WeatherComponent;