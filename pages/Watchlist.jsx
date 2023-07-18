import { useContext } from "react"
import { WatchlistContext } from "../src/Contexts"
import { CardList } from "../src/Components"

export const Watchlist = () => {
    const { watchlist, setWatchlist } = useContext(WatchlistContext);

    return (
        <>
            <h1 className="page-title">Watchlist</h1>
            <CardList listEntries={ watchlist }/>
        </>
    )
}
