import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { WatchlistContext } from "../src/Contexts"
import { DetailCard } from "../src/Components"

export const SeriesDetails = () => {
    const [ movieData, setMovieData ] = useState([])
    const { watchlist, setWatchlist } = useContext(WatchlistContext);

    const { id } = useParams();
    console.log(id)

    if (id === undefined) {
        
    }

    useEffect(() => {
        const fetchData = async () => {
            const fetchedData = await fetch(`http://www.omdbapi.com/?apikey=aab3521f&i=${ id }`);
            const data = await fetchedData.json();

            console.log(data)

            setMovieData(data);
        };

        fetchData();
    }, [ id ]);

    console.log(movieData)

    return (
        <>
            <h1 className="page-title">Movies</h1>
            <DetailCard entry={ movieData }/>
        </>
    )
}
