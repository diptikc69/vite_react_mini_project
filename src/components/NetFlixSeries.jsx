import seriesData from "../api/seriesData.json";
import { SeriesCard } from "./SeriesCard";

const NetFlixSeries = ({ searchTerm }) => {
    // Filter series based on the name field
    const filteredSeries = seriesData.filter((curElem) =>
        curElem.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <ul className="grid grid-three--cols">
            {filteredSeries.length > 0 ? (
                filteredSeries.map((curElem) => (
                    <SeriesCard key={curElem.id} curElem={curElem} />
                ))
            ) : (
                <p>No series found for "{searchTerm}"</p> // Message if no matches
            )}
        </ul>
    );
};

export default NetFlixSeries;








