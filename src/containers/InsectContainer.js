import React, { useState, useEffect } from 'react';
import InsectHeader from '../components/InsectHeader';
import InsectList from '../components/InsectList';

const InsectsContainer = () => {

    const [insectsData, setInsectsData] = useState([])
    // const [refinedInsects, setRefinedInsects] = useState(null)

    const [searchByCrop, setSearchByCrop] = useState('')
    const [refinedInsects, setRefinedInsects] = useState([])
    // const [sortBy, setSortBy] = useState('')
    // const [continent, setContinent] = useState('')


    
    useEffect(() => {
        onChangeSearchByCrop()
    }, [searchByCrop])
    // useEffect(() => {onChangeSortBy(sortBy)}, [sortBy])
    // useEffect(() => {continentChange(continent)}, [continent])
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

    // value.data.crops
    // }
    // crop.preventDefault()
    // InsectList.foreEach((crop)=>{
    // })
    // setSearch(crop.target.value)
    // }

    // const onChangeSortBy = (sortBy) => {
    //     if (sortBy === 'Alphabetical') {
    //         const sortByInsects = [...refinedInsects]
    //         const result = sortByInsects.sort((a,b) => a.title.localeCompare(b.title))
    //         return setRefinedInsects(result)
    //     }
    // }

    // const continentChange = (continent) => {
    //     const insectsByContinent = [...insects]
    //     if (continent === '') {
    //         setRefinedInsects(continent)
    //         return
    //     }
    //     const result = insectsByContinent.filter((insect) => {
    //         return insect.contient.toLowerCase() === continent.toLowerCase()
    //     })
    //     result.length !== 0 ? setRefinedInsects(result)
    //     :setRefinedInsects([])
    // }

    return (
        <div>
            {/* <InsectHeader search={search} setSearch={setSearch} setSortBy={setSortBy} setContinent={setContinent} onChangeSortBy={onChangeSortBy}/> */}
            <InsectHeader searchByCrop={searchByCrop} setSearchByCrop={setSearchByCrop} />
            <InsectList insectsData={insectsData} searchByCrop={searchByCrop}  refinedInsects={refinedInsects}/>
        </div>
    )

}

export default InsectsContainer