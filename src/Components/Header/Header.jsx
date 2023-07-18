import { useRef, useState } from "react"
import { Link, NavLink } from "react-router-dom"
import logo from "../../assets/flixtube-logo.png"
import "./Header.scss"

export const Header = () => {
    const initialFlagValue = false;
    const flagReference = useRef(initialFlagValue);
    
    const [ searchResults, setSearchResults ] = useState([]);

    document.addEventListener("click", () => {
        flagReference.current ? document.querySelector(".search-result-wrapper").style.display = "block" : document.querySelector(".search-result-wrapper").style.display = "none";
    });

    const handleRedirect = () => {
        flagReference.current = false;
        document.querySelector("#search").value = "";
        setSearchResults([]);
    };
    
    const performSearch = async (e) => {        
        const fetchedData = await fetch(`http://www.omdbapi.com/?apikey=aab3521f&type=movie&s=${ e.target.value }`);
        const data = await fetchedData.json();

        if (data.Response === "False") {
            return;
        }

        setSearchResults(data.Search);
    };

    // const loadMoreResults = async () => {
    //     let counter = 2

    //     const fetchedData = await fetch(`http://www.omdbapi.com/?apikey=aab3521f&type=movie&s=${ document.querySelector("#search").value }&page=${ counter }`);
    //     const data = await fetchedData.json();

    //     if (data.Response === "False") {
    //         return;
    //     }

    //     counter++;

    //     const newResults = data.Search.map(result => {
    //         return (
    //             <li key={ result.imdbID }>
    //                 <Link to={ `/movies/${ result.imdbID }` } className="search-link" onClick={ handleRedirect }>
    //                     <div className="search-result">
    //                         <img src={ result.Poster } />
    //                         <p className="result-title">{ result.Title }</p>
    //                         <p className="result-year">{ result.Year }</p>
    //                     </div>
    //                 </Link>
    //             </li>
    //         )
    //     });

    //     document.querySelector(".search-result-list").insertAdjacentHTML("beforeend", newResults);

    //     setSearchResults(searchResults => [...searchResults, data.Search]);
    // };

    return (
        <header className="Header">
            <div className="logo">
                <Link to="/">
                    <img src={ logo }/>
                </Link>
            </div>
            <nav className="navigation">
                <ul className="navigation-list">
                    <li><NavLink to="/movies">Movies</NavLink></li>
                    <li><NavLink to="/watchlist">Watchlist</NavLink></li>
                    <li>
                        <div onMouseEnter={ () => flagReference.current = true }  onMouseLeave={ () => flagReference.current = false } className="search-wrapper">
                            <input onChange={ (e) => performSearch(e) } id ="search" className="searchfield" type="text" placeholder="What movie do you want to watch today?" />
                            <div className="search-result-wrapper">
                                <ul className="search-result-list">
                                    {
                                        searchResults.map(result => {
                                            return (
                                                <li key={ result.imdbID }>
                                                    <Link to={ `/movies/${ result.imdbID }` } className="search-link" onClick={ handleRedirect }>
                                                        <div className="search-result">
                                                            <img src={ result.Poster } />
                                                            <p className="result-title">{ result.Title }</p>
                                                            <p className="result-year">{ result.Year }</p>
                                                        </div>
                                                    </Link>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                                {/* <button onClick={ loadMoreResults } className="load-more">Load more results</button> */}
                            </div>
                        </div>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
