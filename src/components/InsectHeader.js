import React from "react";
import InsectQueryOption from "./InsectQueryOption";

const InsectHeader = ({ searchByCrop, setSearchByCrop, setContinent, setSortBy }) => {

    return (
        <div>
            <InsectQueryOption searchByCrop={searchByCrop} setSearchByCrop={setSearchByCrop} setContinent={setContinent} setSortBy={setSortBy} />
        </div>
    )
}

export default InsectHeader