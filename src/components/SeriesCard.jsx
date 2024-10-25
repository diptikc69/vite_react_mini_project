export const SeriesCard = ({ curElem }) => {
    const { img_url, name, rating, description, cast, genre, watch_url } = curElem;

    const btn_style = {
        padding: "1.2rem 2.4rem",
        border: "none",
        fontSize: "1.6rem",
        backgroundColor: `${rating >= 8.5 ? "#7dcea0": "#f7dc6f"}`, 
        color: "black" ,    
        fontWeight: "bold",
        cursor: "pointer", 
    };
    
    return (
        <li className="card">
            <>
                <div>
                    <img src={img_url} alt="#" width="200px" height="200px" />
                </div>
                <div className="flex flex-col gap-6 py-6 px-6">
                    <h2>Name: {name}</h2>
                    <h3>
                        Rating:
                        <span className={`rating ${rating >= 8.5 ? "super_hit" : "average"}`}>
                            {rating}
                        </span>
                    </h3>
                    <p className="text-3xl font-bold underline">Summary: {description}</p>
                    <p>Genre: {genre}</p>
                    <p>Cast: {cast}</p>
                    <a href={watch_url} target="_blank">
                        <button style={btn_style}>
                            Watch Now
                        </button>
                    </a>
                </div>
            </>
        </li>
    );
}
