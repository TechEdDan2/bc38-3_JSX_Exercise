import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client'

/**
 * 
 * The NamedComponent receives a prop 'name' 
 *  and displays it inside a paragraph element.
 * 
 * @param {*} props 
 * @returns html paragraph element
 */

const NamedComponent = (props) => {
    return (
        <p>My name is {props.name}</p>
    );
}

export default NamedComponent;