import React, { Component } from "react";
import Person from './Person/Person'

const persons = (props) => {
    return (
        <div>
            {
            props.person.map((person, index) => 
            <Person 
                name= {person.name} 
                age={person.age} 
                changed={(event) => props.changed(event, person.id)}
                delete={() => props.delete(index)}
                key={person.id}/>
            )}
        </div>
    );
}

// class Persons extends Component{

//     render(){
//         return(
//         <div>
//             {
//             this.props.person.map((person, index) => 
//             <Person 
//                 name= {person.name} 
//                 age={person.age} 
//                 changed={(event) => this.props.changed(event, person.id)}
//                 delete={() => this.props.delete(index)}
//                 key={person.id}/>
//             )}
//         </div>
//         );
//     }
// }

export default persons