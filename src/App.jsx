import NetFlixSeries from "./components/NetFlixSeries";
import { useState } from "react";
import "./components/NetFlix.css";

export
 const App = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value); // Update searchTerm state
    };

    const handleSearchClick = () => {
        console.log("Searching for:", searchTerm); // Log current searchTerm
    };

    return (
        <section className="container">
            <h1 className="card-heading">List of Best Netflix Series</h1>

            {/* Search input and button */}
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Search series..."
                    value={searchTerm} // Controlled input
                    onChange={handleSearchChange} // Update on change
                />
                <button onClick={handleSearchClick}>Search</button>
            </div>

            {/* Pass searchTerm to the NetFlixSeries component */}
            <NetFlixSeries searchTerm={searchTerm} />
        </section>
    );
};

