import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Error from "./Error"


const People = (props) => {
    const { id } = useParams();

    const [info, setInfo] = useState([]);

    const [errorSweep, setErrorSweep] = useState(false);


    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${id}`)
            .then((response) => {
                console.log(response);
                setInfo(response.data);
                setErrorSweep(false);
            })
            .catch((error) => {
                console.log("this is our catch-all ERROR message:", error)
                setErrorSweep(true);
            })
    }, [id])

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
                <p>Height: {info.height}</p>
                <p>Mass: {info.mass}</p>
                <p>Hair Color: {info.hair_color}</p>
                <p>Skin Color: {info.skin_color}</p>
            </div>
        )
    }
}

export default People