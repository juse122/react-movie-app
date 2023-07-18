import { useEffect, useState } from "react"
import { CardList } from "../src/Components"

export const Movies = () => {
    const [ topMovieData, setTopMovieData ] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const fetchedData = await fetch(`http://www.omdbapi.com/?apikey=aab3521f&s=water&type=movie`);
            const data = await fetchedData.json();

            setTopMovieData(data.Search);
        };

        fetchData();
    }, []);

    return (
        <>
            <h1 className="page-title">Movies</h1>
            <CardList listEntries={ topMovieData }/>
        </>
    )
}
