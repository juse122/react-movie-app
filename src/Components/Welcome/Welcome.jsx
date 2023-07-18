import "./Welcome.scss"

// eslint-disable-next-line react/prop-types
export const Welcome = ({ user }) => {
    return (
        <div className="Welcome">
            <h1>{ new Date().getHours() > 18 ? "Good evening," : "Hello," } { user }</h1>
            <h2>Here is today&apos;s top pick:</h2>
        </div>
    )
}
