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
        <div className="border-md border-red-300 w-7xl m-auto">
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {movie && (
                <div className=" p-4 mt-4 mx-9 mb-4">
                    <h2 className=" mb-3 font-extrabold">name: {movie.title}</h2>
                    <h3>Release Date: {movie.release_date}</h3>
                    <p>director: {movie.director}</p>
                    <p>producer: {movie.producer}</p>
                    <p>{movie.opening_crawl}</p>
                </div>
            )}
        </div>



    )
}

export default FilmDetails
