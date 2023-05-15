import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Error = () => {
    const [errorMessage, setErrorMessage] = useState([]);

    useEffect(() => {
        //I thought we had to display Obi Wan from the API for the error at first, not an img we chose
        axios.get("https://swapi.dev/api/people/10/")
            .then((response) => {
                setErrorMessage(response.data);
            })
            .catch((error) => {
                console.log("this is our catch-all ERROR message:", error);
            })
    }, [])

    return (
        <div>
            <h1>This isn't the page you were looking for! Move along...</h1>
            <img src="https://www.meme-arsenal.com/memes/52577612a290566287f2273992fa918e.jpg" alt="This isn't the page you're looking for..." />
        </div>
    )
}

export default Error