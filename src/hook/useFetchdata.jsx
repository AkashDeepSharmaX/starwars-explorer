import { useEffect, useState } from "react";

export default function useFetchdata(url) {
    const [data, setData] = useState(null);        // Full API response
    const [list, setList] = useState([]);          //  the 'results' array
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        setLoading(true);

        async function fetchData() {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error("Could not fetch data");
                }
                const result = await response.json();
                setData(result);
                setList(result.results);   
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        }

        fetchData();
    }, [url]);

    return { data, list, loading, error };
}
