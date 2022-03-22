import React, { useState }from "react";
import Box from "./Box";
import './Box.css';

function Grid() {
    const [count, setCount] = useState(0);

    function addCount() {
        setCount(count + 1);
    }

    function minusCount() {
        setCount(count - 1);
    }
    

    return (
        <div className="container">
            <h1>Count: {count}</h1>
            <div className="grid-container" >
                <div className="grid-item" >
                    <Box increase={addCount} decrease={minusCount}/>
                </div>
                <div className="grid-item" >
                    <Box increase={addCount} decrease={minusCount}/>
                </div>
                <div className="grid-item" >
                    <Box increase={addCount} decrease={minusCount}/>
                </div>
                <div className="grid-item" >
                    <Box increase={addCount} decrease={minusCount}/>
                </div>
            </div>
        </div>
    );
}

export default Grid;