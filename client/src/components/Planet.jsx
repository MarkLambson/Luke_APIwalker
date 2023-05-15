import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Error from "./Error"

const Planet = () => {
    const { id } = useParams();

    const [info, setInfo] = useState([]);

    const [errorSweep, setErrorSweep] = useState(false);
    //to check for errors

    useEffect(() => {
        axios.get(`https://swapi.dev/api/planets/${id}`)
            .then((response) => {
                console.log(response);
                //console log to check if data is there and what it looks like
                setInfo(response.data);
                setErrorSweep(false);
            })
            .catch((error) => {
                //log error to see it easier, set sweep to true
                console.log("this is our catch-all ERROR message:", error);
                setErrorSweep(true);
            })
    }, [id]);
    //added 'id' into [] for planets id selected by user////////////////////////////////

    if (errorSweep) {
        //sweep returns error page
        return (
            <div>
                <Error />
            </div>
        )
    } else {
        return (
            <div>
                <h2>Name: {info.name}</h2>
                <p>Climate: {info.climate}</p>
                <p>Terrain: {info.terrain}</p>
                <p>Surface Water: {info.surface_water}</p>
                <p>Population: {info.population}</p>
            </div>
        )
    }
}

export default Planet