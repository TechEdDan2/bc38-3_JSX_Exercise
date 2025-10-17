import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client'

/**
 * 
 * The Person component receives 'name', 'age' and 
 * 'hobbies' as props
 * 
 * @param {*} props name, age, and hobbies of the person
 * @returns the person structure with information 
 */

const Person = ({ name, age, hobbies }) => {
    const voteMessage = age >= 18 ? "Please go vote." : "You must be 18.";
    const MAX_LENGTH = 6;
    return (
        <div className="person">
            <div>
                <h3>Name: {name.slice(0, MAX_LENGTH)}</h3>
                <p>Age: {age}</p>
                <h4>Hobbies:</h4>
                <ul>
                    {hobbies.map(hobby =>
                        <li> {hobby} </li>
                    )}
                </ul>
                <h3>{voteMessage}</h3>
            </div>
        </div>
    );
}

export default Person;