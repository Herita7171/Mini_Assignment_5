import React, { useState } from 'react';
import './Box.css';

function Box(props) {
    const [className, setClassName] = useState("box");

    function handleClick() {
        if (className === "box") {
            setClassName("box black");
            props.increase();
        } else {
            setClassName("box");
            props.decrease();
        }
    }

    return (
        <div>
            <div className={className} onClick={handleClick}>

            </div>
        </div>
    );
}

export default Box;
