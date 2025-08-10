
import useFetchdata from "../hook/useFetchdata"

const People = () => {
    
    const{list: people, loading, error}= useFetchdata(`https://swapi-api.hbtn.io/api/people/`)

    console.log("people data:", people);

    return (
        <div className="bg-linear-to-r from-pink-500 to-violet-500 rounded-lg border-red-300 w-7xl m-auto">
            {error && <h3>{error}</h3>}
            {loading ? (<p>loading...</p>) : (
                people.map((peoples) => (
                    <div key={peoples.url} className="  bg-linear-to-r from-pink-500 to-violet-500 rounded-lg p-2 mt-4 ">
                        <p className=" text-4xl text-white ">Name: {peoples.name}</p>
                        <p className="text-white">height: {peoples.gender}</p>
                        <p className="text-white">height: {peoples.height}</p>
                        <p className="text-white">skin color: {peoples.skin_color}</p>
                    </div>
                ))
            )}
        </div>
    )
}

export default People
