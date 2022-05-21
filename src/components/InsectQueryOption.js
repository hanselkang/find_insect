import React from "react";

// const InsectQueryOption = ({ search, setSearch, setSortBy, setContinent }) => {
const InsectQueryOption = ({ searchByCrop, setSearchByCrop, setContinent, setSortBy }) => {


    const continentArr = ['Asia', 'Africa', 'Europe', 'Australasia & Oceania', 'North America', 'Middle East', 'South America']

    const sortByArr = ['Alphabetical', 'ID']
    const handleSortChange = (event) => setSortBy(event.target.value)
    const handleChange = (event) =>  setSearchByCrop(event.target.value) 
    const handleContinentChange = (event) => setContinent(event.target.value)

    return (
        <div>
            <input onChange={handleChange} type='text' placeholder='Search by a crop name' value={searchByCrop} />


            <select onChange={handleContinentChange}>
                <option value=''>
                    Continents
                </option>
                {continentArr.map((continent, index) => {
                    return <option value={continent} key={index}>{continent}</option>
                })}
            </select>

            <select onChange={handleSortChange}>
                <option value=''>
                    Sort By
                </option>
                {sortByArr.map((sort, index) => {
                    return <option value={sort} key={index}>
                        {sort}
                    </option>
                })}
            </select>
        </div>
    )
}

export default InsectQueryOption