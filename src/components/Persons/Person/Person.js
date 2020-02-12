import React from 'react';
import './Person.css'

const person = (props) => {
    return (
        <div className="person">
            <input type="text" onChange={props.changed} value={props.name}></input>
            <p></p>
            Hi my name is {props.name}
                <div onClick={props.delete} className="person-age">
                    I am {props.age} years old 
                    {props.children}
                </div>
        </div>
    );
}

export default person;