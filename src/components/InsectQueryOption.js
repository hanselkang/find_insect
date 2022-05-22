import React from "react";

// const InsectQueryOption = ({ search, setSearch, setSortBy, setContinent }) => {
const InsectQueryOption = ({ searchByTitle, setSearchByTitle, setSearchByUKStatus, setSearchByCountry, setSearchByCrop, setContinent, setSortBy, index }) => {



    const continentList = ['Asia', 'Africa', 'Europe', 'Australasia & Oceania', 'North America', 'Middle East', 'South America']
    const cropList = ["Barley", "Carrot", "Citrus", "Coffee", "Elm", "Grape", "Grasses/Cereals", "Maize",
        "Olive", "Ornamentals", "Papaya", "Peach", "Potato", "Rice", "Rubus ", "Strawberry", "Sugarbeet", "Sugarcane", "Tomato", "Wheat", "Other"
    ]
    const ukStatus = ["Present", "Not present in UK"]
    const sortByArr = ['Alphabetical', 'ID']
    const countryList = [
        "Afghanistan",
        "Albania",
        "Algeria",
        "Andorra",
        "Antarctica",
        "Argentina",
        "Armenia",
        "Aruba",
        "Australia",
        "Austria",
        "Azerbaijan",
        "Bahamas (the)",
        "Bahrain",
        "Bangladesh",
        "Barbados",
        "Belarus",
        "Belgium",
        "Belize",
        "Benin",
        "Bermuda",
        "Bhutan",
        "Bosnia and Herzegovina",
        "Botswana",
        "Bouvet Island",
        "Brazil",
        "Brunei Darussalam",
        "Bulgaria",
        "Burkina Faso",
        "Burundi",
        "Cabo Verde",
        "Cambodia",
        "Cameroon",
        "Canada",
        "Cayman Islands",
        "Chad",
        "Chile",
        "China",
        "Christmas Island",
        "Colombia",
        "Comoros",
        "Congo",
        "Cook Islands",
        "Costa Rica",
        "Croatia",
        "Cuba",
        "Curaçao",
        "Cyprus",
        "Czechia",
        "Côte d'Ivoire",
        "Denmark",
        "Djibouti",
        "Dominica",
        "Dominican Republic",
        "Ecuador",
        "Egypt",
        "El Salvador",
        "Equatorial Guinea",
        "Eritrea",
        "Estonia",
        "Eswatini",
        "Ethiopia",
        "Faroe Islands",
        "Fiji",
        "Finland",
        "France",
        "French Guiana",
        "French Polynesia",
        "Gabon",
        "Gambia",
        "Georgia",
        "Germany",
        "Ghana",
        "Gibraltar",
        "Greece",
        "Greenland",
        "Grenada",
        "Guadeloupe",
        "Guam",
        "Guatemala",
        "Guernsey",
        "Guinea",
        "Guinea-Bissau",
        "Guyana",
        "Haiti",
        "Holy See",
        "Honduras",
        "Hong Kong",
        "Hungary",
        "Iceland",
        "India",
        "Indonesia",
        "Iran",
        "Iraq",
        "Ireland",
        "Israel",
        "Italy",
        "Jamaica",
        "Japan",
        "Jersey",
        "Jordan",
        "Kazakhstan",
        "Kenya",
        "Kiribati",
        "Korea",
        "Kuwait",
        "Kyrgyzstan",
        "Laos",
        "Latvia",
        "Lebanon",
        "Lesotho",
        "Liberia",
        "Libya",
        "Liechtenstein",
        "Lithuania",
        "Luxembourg",
        "Macao",
        "Madagascar",
        "Malawi",
        "Malaysia",
        "Maldives",
        "Mali",
        "Malta",
        "Marshall Islands",
        "Martinique",
        "Mauritania",
        "Mauritius",
        "Mayotte",
        "Mexico",
        "Moldova",
        "Monaco",
        "Mongolia",
        "Montenegro",
        "Montserrat",
        "Morocco",
        "Mozambique",
        "Myanmar",
        "Namibia",
        "Nauru",
        "Nepal",
        "Netherlands",
        "New Caledonia",
        "New Zealand",
        "Nicaragua",
        "Niger",
        "Nigeria",
        "Niue",
        "Norfolk Island",
        "Norway",
        "Oman",
        "Pakistan",
        "Palau",
        "Palestine",
        "Panama",
        "Papua New Guinea",
        "Paraguay",
        "Peru",
        "Philippines",
        "Pitcairn",
        "Poland",
        "Portugal",
        "Puerto Rico",
        "Qatar",
        "North Macedonia",
        "Romania",
        "Russian Federation",
        "Rwanda",
        "Réunion",
        "Saint Barthélemy",
        "Saint Kitts and Nevis",
        "Saint Lucia",
        "Samoa",
        "San Marino",
        "Sao Tome and Principe",
        "Saudi Arabia",
        "Senegal",
        "Serbia",
        "Seychelles",
        "Sierra Leone",
        "Singapore",
        "Slovakia",
        "Slovenia",
        "Solomon Islands",
        "Somalia",
        "South Africa",
        "South Sudan",
        "Spain",
        "Sri Lanka",
        "Sudan",
        "Suriname",
        "Sweden",
        "Switzerland",
        "Syria",
        "Taiwan",
        "Tajikistan",
        "Tanzania",
        "Thailand",
        "Timor-Leste",
        "Togo",
        "Tokelau",
        "Tonga",
        "Tunisia",
        "Turkey",
        "Turkmenistan",
        "Tuvalu",
        "Uganda",
        "Ukraine",
        "United Kingdom",
        "United States",
        "Uruguay",
        "Uzbekistan",
        "Vanuatu",
        "Venezuela",
        "Vietnam"
    ];



    const handleSortChange = (event) => setSortBy(event.target.value)
    const handleCropChange = (event) => setSearchByCrop(event.target.value)
    const handleCountryChange = (event) => setSearchByCountry(event.target.value)
    const handleContinentChange = (event) => setContinent(event.target.value)
    const handleUKStatusChange = (event) => setSearchByUKStatus(event.target.value)
    const handleChange = (event) => setSearchByTitle(event.target.value)




    return (
        <div key={index} >
            <table id="table_menu">
                <thead>
                    <tr>
                        <td>Distribution Country</td>
                        <td rowSpan="6"><select onChange={handleCountryChange} id="header">
                            <option value=''>
                                Distribution Country
                            </option>
                            {countryList.map((country, index) => {
                                return <option value={country} key={index}>{country}</option>
                            })}
                        </select>

                            <select onChange={handleUKStatusChange} id="header">
                                <option value=''>
                                    UK Status
                                </option>
                                {ukStatus.map((status, index) => {
                                    return <option value={status} key={index}>{status}</option>
                                })}
                            </select>

                            <select onChange={handleCropChange} id="header">
                                <option value=''>
                                    Crops
                                </option>
                                {cropList.map((crop, index) => {
                                    return <option value={crop} key={index}>{crop}</option>
                                })}
                            </select>

                            <select onChange={handleContinentChange} id="header">
                                <option value=''>
                                    Continents
                                </option>
                                {continentList.map((continent, index) => {
                                    return <option value={continent} key={index}>{continent}</option>
                                })}
                            </select>

                            <input onChange={handleChange} type='text' placeholder='Search by insects title' value={searchByTitle} id="header_text" />

                            <select onChange={handleSortChange} id="header">
                                <option value=''>
                                    Sort By
                                </option>
                                {sortByArr.map((sort, index) => {
                                    return <option value={sort} key={index}>
                                        {sort}
                                    </option>
                                })}
                            </select></td>
                    </tr>
                    <tr>
                        <td>UK Status</td>
                    </tr>
                    <tr>
                        <td>Crops</td>
                    </tr>
                    <tr>
                        <td>Continents</td>
                    </tr>
                    <tr>
                        <td>Search by Insects</td>
                    </tr>
                    <tr>
                        <td>Sort By</td>
                    </tr>
                </thead>
            </table>
        </div>
    )
}

export default InsectQueryOption