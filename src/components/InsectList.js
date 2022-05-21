import React from "react";
import InsectItem from "./InsectItem";
import InsectSearchItem from "./InsectSearchItem";

const InsectList = ({ insectsData, index, refinedInsects, }) => {

    const insectNodes = insectsData.results?.map((insect, index) => {
        return <InsectItem insect={insect} key={index} />
    })

    const refinedInsectNodes = refinedInsects === null ? '' : refinedInsects.map((insect, index) => {   return <InsectSearchItem insect={insect} key={index} />})


    return (
        <div key={index}>
            <div>
                {refinedInsectNodes}
            </div>
            <details>
                <summary>Insect List</summary>
                <div> {insectNodes} </div>
            </details>
        </div>
    )
}

export default InsectList