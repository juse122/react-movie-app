import { useEffect, useState } from "react"
import { DetailCard, Welcome } from "../src/Components"

// eslint-disable-next-line react/prop-types
export const Home = ({ user }) => {

const [ pickData, setPickData ] = useState([]);

useEffect(() => {
    const fetchData = async () => {
        const fetchedData = await fetch("https://www.omdbapi.com/?apikey=aab3521f&i=tt0463985");
        const data = await fetchedData.json();

        setPickData(data);
    };

    fetchData();
}, []);

    return (
        <>
            <Welcome user={ user } />
            <DetailCard entry={ pickData } />
        </>
    )
}
