import useFetchdata from "../hook/useFetchdata"


const Planet = () => {
 

    const {list: planet , loading , error}=useFetchdata(`https://swapi-api.hbtn.io/api/planets/`)
    return (

        <div className="border border-red-300 w-7xl m-auto">
            {error && <h3>{error}</h3>}
            {loading ? (<p>loading....</p>) : (
                planet.map((planets) => (
                    <div key={planets.url} className="  p-2 mt-4 ">
                        <p>name:{planets.name}</p>
                        <p>climate:{planets.climate}</p>
                        <p>population:{planets.population}</p>

                    </div>
                ))
            )}

        </div>




    )
}

export default Planet
