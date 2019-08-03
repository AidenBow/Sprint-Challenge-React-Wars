import React, {useEffect, useState} from 'react';
import axios from 'axios';
import PersonCard from './PersonCard'

export default() => {
    const [person, setPerson] = useState([])

    useEffect(() => {
        axios 
            .get('https://swapi.co/api/people/')
            .then(res => {
                console.log(res.data.results);
                setPerson(res.data.results);
            })
            .catch(err => 
                console.log(err)   
            )
        }, [])

    return (
        <div>
        {person.map(item => {
            return <PersonCard person={item.name} eye={item.eye_color}/>
        })}
        </div>
    );


}

