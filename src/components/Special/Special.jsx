import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Special = ({ring}) => {
    const angti = useContext(RingContext);
    return (
        <div>
            <h2>Special is got a {angti}</h2>
        </div>
    );
};

export default Special;