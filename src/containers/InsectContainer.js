import React, { useState, useEffect } from 'react';
import InsectHeader from '../components/InsectHeader';
import InsectList from '../components/InsectList';

const InsectsContainer = () => {

    const [insectsData, setInsectsData] = useState([])
    const [searchByCrop, setSearchByCrop] = useState('')
    const [refinedInsects, setRefinedInsects] = useState([])
    const [continent, setContinent] = useState('')
    const [sortBy, setSortBy] = useState('')


    
    useEffect(() => {
        onChangeSearchByCrop()
    }, [searchByCrop])
    useEffect(() => {onChangeSortBy(sortBy)}, [sortBy])
    useEffect(() => {continentChange(continent)}, [continent])
    useEffect(() => { getInsectData() }, [])


    const getInsectData = async () => {
        const launchResponse = await fetch('https://insectvectors.science/api/vectors')
        const launchData = await launchResponse.json()
        setInsectsData(launchData)
    }


    const onChangeSearchByCrop = () => {
        if (searchByCrop != '') { 
            const insectMap = insectsData.results?.map((value) => value).filter((item) =>
            item.data.crops.includes(searchByCrop.charAt(0).toUpperCase() + searchByCrop.slice(1)))

        // typeof item.data.crops === "string" ? item.data.crops.toLocaleLowerCase().includes(searchByCrop.toLocaleLowerCase()): '')
        
        const resultSearch = insectMap.map(value => 
            value)
        setRefinedInsects(resultSearch)
        }
        
    }


    const continentChange = (chooseContinent) => {
        if (continent === '') {
            setRefinedInsects([])
            return
        }
        const insectContinent = insectsData.results?.map((value) => value).filter((item) => 
            item.data.continent.includes(chooseContinent))
        
        const resultSearch = insectContinent.map(value => value)
        setRefinedInsects(resultSearch)
    }


    const onChangeSortBy = (sortBy) => {
        if (sortBy === 'Alphabetical') {
            const sortByInsects = [...refinedInsects]
            console.log(sortByInsects)
            const result = sortByInsects.sort((a,b) => a.data?.title.localeCompare(b.data?.title))
            return setRefinedInsects(result)
        }
        if (sortBy === 'ID') {
            const sortByInsects = [...refinedInsects]
            console.log(sortByInsects)
            const result = sortByInsects.sort((a,b) => parseFloat(a.ID) - parseFloat(b.ID))
            return setRefinedInsects(result)
        }
    }

   
    return (
        <div>
            {/* <InsectHeader search={search} setSearch={setSearch} setSortBy={setSortBy} setContinent={setContinent} onChangeSortBy={onChangeSortBy}/> */}
            <InsectHeader searchByCrop={searchByCrop} setSearchByCrop={setSearchByCrop} setContinent={setContinent} setSortBy={setSortBy}/>
            <InsectList insectsData={insectsData} searchByCrop={searchByCrop}  refinedInsects={refinedInsects}/>
        </div>
    )

}

export default InsectsContainer