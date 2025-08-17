import { Link } from "react-router"
import useFetchdata from "../hook/useFetchdata"



const Film = () => {

    const{list, loading, error}=useFetchdata('https://swapi-api.hbtn.io/api/films/')

    return (
        <div className="max-w-2xl mx-auto  flex-col gap-4 rounded-2xl  bg-gradient-to-r from-purple-500 to-pink-500">

            {error && <h2 className=" text-white  ">{error}</h2>}
            {
                loading ? (<p>loading...... </p>) : (
                    <ul className=" gap-5 h-screen p-2 mt-6 ">
                        {list.map((movies) => (
                            <li className=" text-lg font-bold text-white" key={movies.episode_id}> 
                            <Link to={`/FilmDetails/${movies.episode_id}`}   className="underline hover:text-yellow-300">Title: {movies.title}</Link>
                            <li> Release Date: {movies.release_date}</li>
                              </li>  

                        ))}
                    </ul >
                )
            }

        </div>

    )
}

export default Film
