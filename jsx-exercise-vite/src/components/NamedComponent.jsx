import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client'

const NamedComponent = (props) => {
    return (
        <p>My name is {props.name}</p>
    );
}

export default NamedComponent;