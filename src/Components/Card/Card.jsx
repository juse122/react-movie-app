import { useContext } from "react";
import { Link } from "react-router-dom"
import { WatchlistContext } from "../../Contexts"
import "./Card.scss"

export const Card = ({ entry }) => {
    const { watchlist, setWatchlist } = useContext(WatchlistContext);

    const addEntry = () => {
        const watchlistAfterAddition = [ entry, ...watchlist ];
        setWatchlist(watchlistAfterAddition);
        localStorage.setItem("watchlist", JSON.stringify(watchlistAfterAddition));
    };

    const removeEntry = () => {
        const watchlistAfterRemoval = watchlist.filter(watchlistEntry => watchlistEntry.imdbID !== entry.imdbID)
        setWatchlist(watchlistAfterRemoval);
        localStorage.setItem("watchlist", JSON.stringify(watchlistAfterRemoval));
    };

    return (
        <div className="Card">
            <Link to={ `/movies/${ entry.imdbID }` } className="card-img">
                <img src={ entry.Poster } alt="poster" />
            </Link>
            <p>{ entry.Title }</p>
            {
                watchlist.findIndex(watchlistEntry => watchlistEntry.imdbID === entry.imdbID) === -1 ?
                <button className="watchlist-button" onClick={ addEntry }>Add to watchlist</button>
                :
                <button className="watchlist-button" onClick={ removeEntry }>Remove from watchlist</button>
            }
        </div>
    )
}
