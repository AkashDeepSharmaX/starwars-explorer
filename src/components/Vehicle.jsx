
import useFetchdata from "../hook/useFetchdata"



const Vehicle = () => {
    const {list: vehicle, loading, error}=useFetchdata(`https://swapi-api.hbtn.io/api/vehicles/`)
    return (
        <div className="border border-red-300 w-7xl m-auto">
            {error && <p>{error}</p>}
            {loading ? (<p>loading....</p>) : (
                vehicle.map((d) => (
                    <div className=" p-2 mt-4 ">
                        <p>name: {d.name}</p>
                        <p>model:{d.model}</p>
                        <p> cost: {d.cost_in_credits}</p>

                    </div>
                ))
            )}

        </div>
    )
}

export default Vehicle
