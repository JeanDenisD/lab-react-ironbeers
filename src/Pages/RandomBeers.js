import { useEffect, useState } from "react"
import Header from "../components/Header";
import beersService from "../services/beersService";

function RandomBeer() {
    const [details, setDetails] = useState({});

    useEffect(() => {
        loadBeer()
    })

    const loadBeer = () => {
        beersService
            .getRandomBeer()
            .then(({ data }) => {
                setDetails(data)
            })
            .catch(e => console.log("error getting data from API", e))
    }

    return (
        <>
            <Header />
            <div>
                <img src={details.image_url} alt="" style={{ maxHeight: "20vh" }} />
                <p>{details.name} </p>
                <p>{details.attenuation_level} </p>
                <p>{details.tagline}</p>
                <p>{details.first_brewed}</p>
                <p>{details.description}</p>
                <p>{details.contributed_by}</p>
            </div>

        </>
    )
}

export default RandomBeer