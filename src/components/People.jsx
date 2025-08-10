
import useFetchdata from "../hook/useFetchdata"

const People = () => {
    
    const{list: people, loading, error}= useFetchdata(`https://swapi-api.hbtn.io/api/people/`)

    console.log("people data:", people);

    return (
        <div className="border border-red-300 w-7xl m-auto">
            {error && <h3>{error}</h3>}
            {loading ? (<p>loading...</p>) : (
                people.map((peoples) => (
                    <div key={peoples.url} className="  p-2 mt-4 ">
                        <p>name: {peoples.name}</p>
                        <p className="text-gray-400">height: {peoples.gender}</p>
                        <p className="text-gray-400">height: {peoples.height}</p>
                        <p className="text-gray-400">skin color: {peoples.skin_color}</p>
                    </div>
                ))
            )}
        </div>
    )
}

export default People
