import React from 'react';

export default function PersonCard({person}){
    console.log(person)
    return (
        <div>
        <li>{person}</li>
        </div>
    )

}