import React from "react";
import InsectQueryOption from "./InsectQueryOption";

const InsectHeader = ({ searchByTitle, setSearchByTitle, setSearchByCountry, setSearchByCrop, setContinent, setSortBy, setSearchByUKStatus }) => {

    return (
        <div>
            <InsectQueryOption setSearchByCountry={setSearchByCountry} setSearchByCrop={setSearchByCrop} setContinent={setContinent} setSortBy={setSortBy} setSearchByUKStatus={setSearchByUKStatus} searchByTitle={searchByTitle} setSearchByTitle={setSearchByTitle} />
        </div>
    )
}

export default InsectHeader