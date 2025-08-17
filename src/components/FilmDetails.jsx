import { useEffect, useState } from "react"
import { useParams } from "react-router"



const FilmDetails = () => {

    const { id } = useParams()
    const [movie, setmovie] = useState([])
    const [error, setError] = useState()
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        async function fetchData() {
            setLoading(true)
            try {
                const response = await fetch(`https://swapi-api.hbtn.io/api/films/${id}`)
                if (!response.ok) {
                    throw new Error(" not fetching");

                }
                const data = await response.json()
                setmovie(data)
                setLoading(false)

            } catch (error) {
                setError(error.message)

            }
        }
        fetchData();
    }, [id]);

    return (
        <div className=" w-7xl m-auto">
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {movie && (
                <div className=" bg-linear-65 from-purple-500 to-pink-500rounded-lg p-4 mt-4 mx-9 mb-4">
                    <h2 className="text-white text-xl  font-extrabold mb-3 ">Name: {movie.title}</h2>
                    <h3 className="text-white">Release Date: {movie.release_date}</h3>
                    <p className="text-white" >Director: {movie.director}</p>
                    <p className="text-white">Producer: {movie.producer}</p>
                    <p className="text-white">{movie.opening_crawl}</p>
                </div>
            )}
        </div>



    )
}

export default FilmDetails
