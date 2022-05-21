import React from "react";
import InsectQueryOption from "./InsectQueryOption";

const InsectHeader = ({ searchByCountry ,setSearchByCountry, searchByCrop, setSearchByCrop, setContinent, setSortBy }) => {

    return (
        <div>
            <InsectQueryOption searchByCountry={searchByCountry} setSearchByCountry={setSearchByCountry}  searchByCrop={searchByCrop} setSearchByCrop={setSearchByCrop} setContinent={setContinent} setSortBy={setSortBy} />
        </div>
    )
}

export default InsectHeader