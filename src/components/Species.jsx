
import useFetchdata from "../hook/useFetchdata"


const Species = () => {
    const {list: species , error , loading }= useFetchdata(`https://swapi-api.hbtn.io/api/species/`)
    return (
        <div className="border border-red-300 w-7xl m-auto">
            {error && <p>{error}</p>}
            {loading ? (<p>loading....</p>) : (
                species.map((d) => (
                    <div className="  p-2 mt-4 ">
                        <p>name: {d.name}</p>
                        <p> average-lifespan: {d.average_lifespan}</p>

                    </div>
                ))
            )}

        </div>

    )
}

export default Species
