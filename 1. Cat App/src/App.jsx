import { useState } from "react";
import { FactFetcher } from "./FactFetcher"; // Renombrado para mayor claridad
import { ImageDisplayer } from "./ImageDisplayer";

export function App() {
    const [wordData, setWordData] = useState(null);
    const [error, setError] = useState(null);

    const handleDataFetched = (data) => {
        if (data) {
            setWordData(data);
        } else {
            setError("No se recibieron datos válidos");
        }
    };

    const firstWord = wordData ? wordData.trim().split(' ')[0] : null;

    return (
        <div>
            <h1>Cat App</h1>
            <FactFetcher onDataFetched={handleDataFetched} />
            {error && <p>{error}</p>}
            {firstWord && <ImageDisplayer word={firstWord} />}
        </div>
    );
}
