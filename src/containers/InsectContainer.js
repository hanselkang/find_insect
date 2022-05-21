import React, { useState, useEffect } from 'react';
import InsectHeader from '../components/InsectHeader';
import InsectList from '../components/InsectList';

const InsectsContainer = () => {

    const [insectsData, setInsectsData] = useState([])
    const [searchByCrop, setSearchByCrop] = useState('')
    const [searchByCountry, setSearchByCountry] = useState('')
    const [refinedInsects, setRefinedInsects] = useState([])
    const [continent, setContinent] = useState('')
    const [sortBy, setSortBy] = useState('')



    useEffect(() => {
        onChangeSearchByCrop()
    }, [searchByCrop])
    useEffect(() => { onChangeSortBy(sortBy) }, [sortBy])
    useEffect(() => { continentChange(continent) }, [continent])
    useEffect(() => { getInsectData() }, [])
    useEffect(() => {
        onChangeSearchByCountry()
    }, [searchByCountry])


    const getInsectData = async () => {
        const launchResponse = await fetch('https://insectvectors.science/api/vectors')
        const launchData = await launchResponse.json()
        setInsectsData(launchData)
    }

    const onChangeSearchByCountry = () => {
        if (searchByCountry != '') {
            const insectMap = insectsData.results?.map((value) => value).filter((item) =>
                item.data.distribution.includes(searchByCountry))


            const resultSearch = insectMap.map(value =>
                value)
            setRefinedInsects(resultSearch)
        }

    }


    const onChangeSearchByCrop = () => {
        if (searchByCrop != '') {
            const insectMap = insectsData.results?.map((value) => value).filter((item) =>
                item.data.crops.includes(searchByCrop))


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
            const result = sortByInsects.sort((a, b) => a.data?.title.localeCompare(b.data?.title))
            return setRefinedInsects(result)
        }
        if (sortBy === 'ID') {
            const sortByInsects = [...refinedInsects]
            console.log(sortByInsects)
            const result = sortByInsects.sort((a, b) => parseFloat(a.ID) - parseFloat(b.ID))
            return setRefinedInsects(result)
        }
    }


    return (
        <div>
            <InsectHeader searchByCrop={searchByCrop} setSearchByCrop={setSearchByCrop} searchByCountry={searchByCountry} setSearchByCountry={setSearchByCountry} setContinent={setContinent} setSortBy={setSortBy} />
            <InsectList insectsData={insectsData} searchByCrop={searchByCrop} refinedInsects={refinedInsects} />
        </div>
    )

}

export default InsectsContainer