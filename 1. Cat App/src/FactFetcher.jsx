import { useEffect, useState } from "react";

export function FactFetcher({ onDataFetched }) {
    const [fact, setFact] = useState("");
    const [isLoaded, setIsLoaded] = useState(false);

    const fetchFact = async () => {
        try {
            const response = await fetch("https://catfact.ninja/fact");
            if (!response.ok) {
                throw new Error("No se pudo cargar el dato");
            }
            const data = await response.json();
            setFact(data.fact);
            onDataFetched(data.fact);
        } catch (error) {
            console.log(error.message);
        } finally {
            setIsLoaded(true);
        }
    };

    useEffect(() => {
        fetchFact();
    }, []);

    return (
        <div>
            <p>{isLoaded ? fact : "Cargando..."}</p>
            <button onClick={fetchFact}>Next</button>
        </div>
    );
}
