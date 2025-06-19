import markerIcon from '/src/assets/marker.png'

export default function Entry(props) {
    return (
        <article className="journal-entry">
            <div className="country-img-container">
                <img src={props.img.src} alt={props.img.alt} className="country-img" />
            </div>

            <div className="country-info">
                <img src={markerIcon} alt="map marker icon" className="marker-icon" />
                <span className="country-name">{props.country}</span>
                <a
                    href={props.googleMapsLink}>
                    View on Google Maps
                </a>
                <h2 className="entry-title">{props.title}</h2>
                <p className="trip-dates">{props.dates}</p>
                <p className="entry-text">{props.text}</p>
            </div>
        </article>
    )
}