import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const NavBar = () => {

    const [resource, setResource] = useState('people');
    const [selectedId, setSelectedId] = useState(0);

    //adding in useNavigate *best practice*
    const navigate = useNavigate();

    const search = (event) => {
        event.preventDefault();
        navigate(`/${resource}/${selectedId}`)
    }

    return (
        <div>
            <h1>Welcome to Luke APIwalker!</h1>
            <br />
            {/* using a form for useNavigate */}
            <form onSubmit={search}>
                <label>Search for:</label>&nbsp;
                <select name="resource" id="search-select" onChange={(event) => setResource(event.target.value)}>
                    <option value='people'>People</option>
                    <option value='planet'>Planets</option>
                </select>&nbsp;&nbsp;&nbsp;
                <label>ID: </label>&nbsp;
                <input type='number' name="selectedId" id="search-id" onChange={(event) => setSelectedId(event.target.value)} />&nbsp;&nbsp;&nbsp;
                {/* <Link to={`/${resource}/${selectedId}`}> */}
                <button className='btn btn-outline-info'> Search </button>
                {/* </Link> */}
            </form>
            {/* using a form for useNavigate */}
            <hr />
        </div>
    );
}

export default NavBar