import location from "./assets/photos/location.png";

const Content = (country) => {
    return (
        <section className="bodySection">
            <img src={`../src/assets/photos/${country.img}`} alt={`${country.name} img`} className="countryImg"/>
            <div className="countryDetails">
                <div className="countryHeader">
                    <img src={location} alt="location icon" className="icon"/>
                    <h3 className="countryName">{country.countName}</h3>
                    <a className="googleLink" href={country.locLink}>View on Google Maps</a>
                </div>
                <h1 className="countryTitle">{country.name}</h1>
                <p className="countryDate">{country.Date.startDay} {country.Date.startMonth}, {country.Date.startYear} - {country.Date.endDay} {country.Date.endMonth}, {country.Date.endYear}</p>
                <p className="countryDesc">{country.Description}</p>
            </div>
        </section>
    );
}

export default Content;
