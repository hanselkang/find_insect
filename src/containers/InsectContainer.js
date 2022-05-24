import React, { useState, useEffect } from 'react';
import InsectHeader from '../components/InsectHeader';
import InsectList from '../components/InsectList';
import InsectDetail from '../components/InsectDetail';

const InsectsContainer = () => {

    const [insectsData, setInsectsData] = useState([])
    const [searchByCrop, setSearchByCrop] = useState('')
    const [searchByCountry, setSearchByCountry] = useState('')
    const [searchByUKStatus, setSearchByUKStatus] = useState('')
    const [continent, setContinent] = useState('')
    const [searchByTitle, setSearchByTitle] = useState('')
    const [selectedInsect, setSelectedInsect] = useState(null)
    const [refinedInsects, setRefinedInsects] = useState([])
    const [sortBy, setSortBy] = useState('')



    useEffect(() => { onChangeSearchByCrop() }, [searchByCrop])
    useEffect(() => { onChangeSortBy(sortBy) }, [sortBy])
    useEffect(() => { onChangeSearchByCountry() }, [searchByCountry])
    useEffect(() => { onChangeSearchByUKStatus(searchByUKStatus) }, [searchByUKStatus])
    useEffect(() => { continentChange(continent) }, [continent])
    useEffect(() => { onChangeSearchByTitle() }, [searchByTitle])
    useEffect(() => { getInsectData() }, [])


    const getInsectData = async () => {
        const launchResponse = await fetch('https://insectvectors.science/api/vectors')
        const launchData = await launchResponse.json()
        setInsectsData(launchData)
    }

    const onChangeSearchByTitle = () => {
        if (searchByTitle !== '') {
            const insectMap = insectsData.results.map((value) => value).filter((item) =>
                item.data.title.toLowerCase().includes(searchByTitle.toLowerCase()))
            const resultSearch = insectMap.map(value =>
                value)
            setRefinedInsects(resultSearch)
        }
    }

    const onInsectClick = (insect) => {
        setSearchByTitle(insect.data.title)
    }

    const onSearchItemClick = (insect) => {
        setSelectedInsect(insect)
    }

    const onChangeSearchByCountry = () => {
        if (searchByCountry !== '') {
            const insectMap = insectsData.results?.map((value) => value).filter((item) =>
                item.data.distribution.includes(searchByCountry))


            const resultSearch = insectMap.map(value =>
                value)
            setRefinedInsects(resultSearch)
        }

    }

    const onChangeSearchByCrop = () => {
        if (searchByCrop !== '') {
            const insectMap = insectsData.results?.map((value) => value).filter((item) =>
                item.data.crops.includes(searchByCrop))


            const resultSearch = insectMap.map(value =>
                value)
            setRefinedInsects(resultSearch)
        }

    }

    const onChangeSearchByUKStatus = (chooseUKstatus) => {
        if (searchByUKStatus === '') {
            setRefinedInsects([])
            return
        }
        const insectStatus = insectsData.results?.map((value) => value).filter((item) =>
            item.data.ukstatus === chooseUKstatus)

        const resultSearch = insectStatus.map(value => value)
        setRefinedInsects(resultSearch)
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
            const result = sortByInsects.sort((a, b) => a.data?.title.localeCompare(b.data?.title))
            return setRefinedInsects(result)
        }
        if (sortBy === 'ID') {
            const sortByInsects = [...refinedInsects]
            const result = sortByInsects.sort((a, b) => parseFloat(a.ID) - parseFloat(b.ID))
            return setRefinedInsects(result)
        }
    }



    return (
        <div id="main">
            <InsectHeader searchByCrop={searchByCrop} setSearchByCrop={setSearchByCrop} searchByCountry={searchByCountry} setSearchByCountry={setSearchByCountry} setContinent={setContinent} setSortBy={setSortBy} setSearchByUKStatus={setSearchByUKStatus} searchByTitle={searchByTitle} setSearchByTitle={setSearchByTitle} />
            {selectedInsect ? <InsectDetail selectedInsect={selectedInsect} /> : null}
            <InsectList setSortBy={setSortBy} insectsData={insectsData} searchByCrop={searchByCrop} refinedInsects={refinedInsects} onInsectClick={onInsectClick} onSearchItemClick={onSearchItemClick} />
            
            <br />
            <br />
            <br />
            <br />
        </div>
    )

}

export default InsectsContainer