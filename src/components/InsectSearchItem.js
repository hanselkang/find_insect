import React from "react";

const InsectSearchItem = ({ insect, index, onSearchItemClick }) => {

    const handleClick = () => {
        onSearchItemClick(insect)
    }


    return (
        <div>
                <div key={index} onClick={handleClick} id="searched_item">
                    {insect?.data?.title}
                </div>
        </div>
    )

}

export default InsectSearchItem