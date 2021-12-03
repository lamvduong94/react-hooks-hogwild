import React from 'react';

function HogDetails({ hog }) {
    const { greased, weight, "highest medal achieved": medal } = hog;

    return (
        <div>
            <strong>{greased ? "Greased" : "Not greased"}</strong>
            <p>
                Highest medal achieved: <strong>{medal}</strong>
            </p>
            <p>
                Weight: <strong>{weight}</strong>
            </p>
        </div>
    )
}

export default HogDetails;