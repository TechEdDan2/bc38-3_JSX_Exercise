import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client'

const Tweet = (props) => {
    return (
        <div className="tweet">
            <div>
                <h3>{props.username}</h3>
                <p>{props.message}</p>
            </div>
        </div>
    );
}

export default Tweet;