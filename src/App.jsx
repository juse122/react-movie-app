import { useEffect, useState } from "react"
import { HashRouter, Routes, Route } from "react-router-dom"
import { WatchlistContext } from "./Contexts"
import { Footer, Header } from "./Components"
import { NotFound, Home, Movies, MovieDetails, Watchlist } from "../pages"
import "./App.scss"

const App = () => {
    const [ user ] = useState("Paul");
    
    const [ watchlist, setWatchlist ] = useState([]);
    const value = { watchlist, setWatchlist };

    useEffect(() => {
        if (localStorage.getItem("watchlist") === null) {
            return;
        }
        
        const storedWatchList = localStorage.getItem("watchlist");
        setWatchlist(JSON.parse(storedWatchList));
    }, [])

    return (
        <WatchlistContext.Provider value={ value }>
            <div className="App">

                <HashRouter>
                    <Header />

                    <div className="page">
                        <Routes>
                            <Route path="/" element={ <Home user={ user } /> } />
                            <Route path="/movies" element={ <Movies /> } />
                            <Route path="/movies/:id" element={ <MovieDetails /> } />
                            <Route path="/watchlist" element={ <Watchlist /> } />
                            <Route path="*" element={ <NotFound /> } />
                        </Routes>
                    </div>

                </HashRouter>

                <Footer />

            </div>
        </WatchlistContext.Provider>
    )
}

export default App
