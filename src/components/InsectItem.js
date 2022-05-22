import React from "react";

const InsectItem = ({ insect, index, onInsectClick }) => {

    const handleClick = () => {
        onInsectClick(insect)
    }

    return (
        <div key={index} onClick={handleClick} id="list">
            {insect?.data.title}
        </div>
    )
}

export default InsectItem