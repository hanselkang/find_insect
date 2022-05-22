import React from "react";
import noImage from "../static/noimage.jpg"

const InsectDetail = ({ selectedInsect, index }) => {

    const notInDatabase = <> not in this database </>

    const size = selectedInsect.data.descriptionSize ? selectedInsect.data.descriptionSize : notInDatabase

    const img = selectedInsect.data.image.url !== "" ? <img src={selectedInsect.data.image.url} width="300px" /> : <img src={noImage} width="300px" />

    const distribution = selectedInsect.data.destribution ? selectedInsect.data.destribution : notInDatabase

    const continent = selectedInsect.data.continent[0] !== null ? selectedInsect.data.continent.map((item) => {
        return (
            <>{item} </>
        )
    }) : notInDatabase

    const ukStatus = selectedInsect.data.ukstatus ? selectedInsect.data.destribution : notInDatabase

    const crops = selectedInsect.data.crops[0] !== null ? selectedInsect.data.crops.map((item) => {
        return (
            <>{item} </>
        )
    }) : notInDatabase

    const diseases =
        selectedInsect.data.diseases ? Object.values(selectedInsect.data.diseases).map((value) => {
            return (<li id="table_disease" >{value} </li>)
        }) : notInDatabase


    return (
        <div id="detail">
            <hr />
            <h2>{selectedInsect.data.title}</h2>
            <hr />
            <h3>family : {selectedInsect.data.family}</h3>
            <div>{img}</div>
            <hr />
            <table id="detail_table">
                <thead>
                    <tr>
                        <td id="table_right" >Size:</td>
                        <td>{size}</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td id="table_right">Continents:</td>
                        <td>{continent}</td>
                    </tr>
                    <tr>
                        <td id="table_right">Distribution:</td>
                        <td>{distribution}</td>
                    </tr>
                    <tr>
                        <td id="table_right">Crops:</td>
                        <td>{crops}</td>
                    </tr>
                    <tr>
                        <td id="table_right">UK Status:</td>
                        <td>{ukStatus}</td>
                    </tr>
                    <tr>
                        <td id="table_right">Diseases:</td>
                        <td >{diseases}</td>
                    </tr>
                </tbody>
            </table>
            <hr />
            <table id="details_detail">
                <thead>
                    <tr>
                        <td>
                            <br />
                            <details id="explain">
                                <summary>Pest Status</summary>
                                <br />
                                <div > {selectedInsect.data.peststatus} </div>
                            </details>
                        </td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                        <br />
                            <details id="explain">
                                <summary>Ecology</summary>
                                <br />
                                <div> {selectedInsect.data.ecology} </div>
                            </details>
                        </td>
                    </tr>
                </tbody>
            </table>


            <hr />
        </div>
    )


}

export default InsectDetail