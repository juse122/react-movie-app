import { Card } from "../Card"
import "./CardList.scss"

// eslint-disable-next-line react/prop-types
export const CardList = ({ listEntries }) => {
    return (
        <div className="CardList">
            <ul>
                {
                    // eslint-disable-next-line react/prop-types
                    listEntries.map(entry => {
                        return (
                            <li key={ entry.imdbID }><Card entry={ entry } /></li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
