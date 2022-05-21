import React from "react";

const InsectItem = ({ insect, index }) => {

    return (
        <div key={index}>
            {insect?.data.title}
        </div>
    )
    
}

export default InsectItem