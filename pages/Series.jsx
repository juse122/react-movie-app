import { useEffect, useState } from "react"
import { CardList } from "../src/Components"

export const Series = () => {
    const [ topSeriesData, setTopSeriesData ] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const fetchedData = await fetch(`http://www.omdbapi.com/?apikey=aab3521f&s=fire&type=series`);
            const data = await fetchedData.json();

            setTopSeriesData(data.Search);
        };

        fetchData();
    }, []);

    return (
        <>
            <h1 className="page-title">Series</h1>
            <CardList listEntries={ topSeriesData }/>
        </>
    )
}
