import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { DetailCard } from "../src/Components"
import "./MovieDetails.scss"

export const MovieDetails = () => {
    const [ movieData, setMovieData ] = useState([])

    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            const fetchedData = await fetch(`https://www.omdbapi.com/?apikey=aab3521f&i=${ id }`);
            const data = await fetchedData.json();

            setMovieData(data);
        };

        fetchData();
    }, [ id ]);

    return (
        <div className="MovieDetails">
            <h1 className="page-title">Movie Details</h1>
            <button className="watchlist-button" onClick={ () => navigate(-1) }>Back</button>
            <DetailCard entry={ movieData }/>
        </div>
    )
}
