import React from "react";
import InsectQueryOption from "./InsectQueryOption";

// const InsectHeader = ({ search, setSearch, setSortBy, setContinent }) => {
const InsectHeader = ({ searchByCrop, setSearchByCrop }) => {

    return (
        <div>
            {/* <InsectQueryOption search={search} setSearch={setSearch} setSortBy={setSortBy} setContinent={setContinent}/> */}
            <InsectQueryOption searchByCrop={searchByCrop} setSearchByCrop={setSearchByCrop} />
        </div>
    )
}

export default InsectHeader