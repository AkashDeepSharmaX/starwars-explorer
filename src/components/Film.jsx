import { Link } from "react-router"
import useFetchdata from "../hook/useFetchdata"



const Film = () => {

    const{list, loading, error}=useFetchdata('https://swapi-api.hbtn.io/api/films/')

    return (
        <div className="border border-red-300 w-7xl m-auto rounded-lg content-center   bg-linear-to-r from-pink-500 to-violet-500">

            {error && <h2 className=" text-white h-25 ">{error}</h2>}
            {
                loading ? (<p>loading...... </p>) : (
                    <ul className=" flex flex-col p-2 mt-6 ">
                        {list.map((movies) => (
                            <li key={movies.episode_id}> <Link to={`/FilmDetails/${movies.episode_id}`}>title: {movies.title}</Link>
                                release_date: {movies.release_date}</li>

                        ))}
                    </ul >
                )
            }

        </div>

    )
}

export default Film
