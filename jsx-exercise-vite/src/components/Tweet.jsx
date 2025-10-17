import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client'

/**
 * 
 * The Tweet component receives 'username', 'date' and 
 *  'message' as props
 * 
 * @param {*} props name and message of the tweet
 * @returns the tweet structure with username and message
 */

const Tweet = ({ username = "Anonymous", date = "Unknown Date", message = "No message provided" }) => {
    return (
        <div className="tweet">
            <div>
                <h3>{username}</h3>
                <p>{date}</p>
                <p>{message}</p>
            </div>
        </div>
    );
}

export default Tweet;