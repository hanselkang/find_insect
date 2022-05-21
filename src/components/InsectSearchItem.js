import React from "react";

const InsectSearchItem = ({ insect, index }) => {

    return (
        <div key={index}>
            {insect?.data?.title}
        </div>
    )
    
}

export default InsectSearchItem