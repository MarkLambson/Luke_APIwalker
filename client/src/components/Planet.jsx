import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Error from "./Error"

const Planet = () => {
    const { id } = useParams();

    const [info, setInfo] = useState([]);

    const [errorSweep, setErrorSweep] = useState(false);

    useEffect(() => {
        axios.get(`https://swapi.dev/api/planets/${id}`)
            .then((response) => {
                console.log(response);
                setInfo(response.data);
                setErrorSweep(false);
            })
            .catch((error) => {
                console.log("this is our catch-all ERROR message:", error);
                setErrorSweep(true);
            })
    }, [id]);

    if (errorSweep) {
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