export default function AddMovies() {


    return (
        
        <div>
                        {/* TITLE */}
    <input onChange={(event) => setSearchTerm(event.target.value)}
        type="text" placeholder="Search for a movie!" value={searchTerm}
    ></input>

                        {/* POSTER (url) */}
    <input onChange={(event) => setSearchTerm(event.target.value)}
        type="text" placeholder="URL for the poster!" value={searchTerm}
    ></input>
     
                            {/* DESCRIPTION */}
    <input onChange={(event) => setSearchTerm(event.target.value)}
        type="text" placeholder="Give a description!" value={searchTerm}
        ></input>

                            {/* GENRE DROPDOWN */}
    <select onChange={(event) => handleOnChange(event.target.value, fav.id)} value={fav.category_id}>
        {allCategories.map((cat, i) => <option key={i} value={cat.id}>
            {cat.name}
        </option>)}
    </select>   
    </div>
    
        
    )
}