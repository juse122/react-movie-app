import { useContext } from "react"
import { WatchlistContext } from "../../Contexts"

import "./DetailCard.scss"

export const DetailCard = ({ entry }) => {
    const { watchlist, setWatchlist } = useContext(WatchlistContext);

    const addEntry = () => {
        const newArray = [ entry, ...watchlist ];
        setWatchlist(newArray);
    };

    const removeEntry = () => {
        setWatchlist(watchlist => watchlist.filter(watchlistEntry => watchlistEntry.imdbID !== entry.imdbID));
    };

    return (
        <div className="DetailCard">
            <div className="movie-img">
                <img src={ entry.Poster } alt="poster" />
            </div>
            <div className="movie-info">
                <h2>{ entry.Title }</h2>
                <div className="movie-data">
                    <p>{ entry.Year }</p>
                    <p>{ entry.Rated }</p>
                    <p>{ entry.Runtime }</p>
                </div>
                <p className="plot">{ entry.Plot }</p>
                <div className="movie-subinfo">
                    <p>Starring: { entry.Actors }</p>
                    <p>Genres: { entry.Genre }</p>
                </div>
                {
                    watchlist.findIndex(watchlistEntry => watchlistEntry.imdbID === entry.imdbID) === -1 ?
                    <button className="watchlist-button" onClick={ addEntry }>Add to watchlist</button>
                    :
                    <button className="watchlist-button" onClick={ removeEntry }>Remove from watchlist</button>
                }
            </div>
        </div>
    )
}
