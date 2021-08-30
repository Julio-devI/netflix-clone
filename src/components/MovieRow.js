import React from 'react'
import './MovieRow.css'

export default ({ title, item }) => {
    return (
        <div>
            <h2>{title}</h2>
            <div className="MovieRow--listarea">
                {items.results.length > 0}
            </div>
        </div>
    );
}