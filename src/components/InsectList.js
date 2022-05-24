import React from "react";
import InsectItem from "./InsectItem";
import InsectSearchItem from "./InsectSearchItem";

const InsectList = ({ setSortBy, insectsData, index, refinedInsects, onInsectClick, onSearchItemClick }) => {

    const insectNodes = insectsData.results?.map((insect, index) => {
        return <InsectItem insect={insect} key={index} onInsectClick={onInsectClick
        } />
    })

    const refinedInsectNodes = refinedInsects === null ? '' : refinedInsects.map((insect, index) => {
        return <InsectSearchItem insect={insect} key={index} onSearchItemClick={onSearchItemClick
        } setSortBy={setSortBy}
        />
    })




    return (
        <div key={index} id="datalist">
            <h1>Find Insects</h1>
            <div id="new_frame">
                {refinedInsectNodes}
            </div>
            <hr />
            <div id="new_frame">
                <br />
                <details>
                    <summary>Insect List ( Total number of insects in this database: {insectsData.count})</summary>
                    <br />
                    <div id="insects_list"> {insectNodes} </div>
                </details>
                <br />
            </div>
            <hr />
        </div>
    )
}

export default InsectList