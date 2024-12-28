

export function ImageDisplayer({ word }) {
    return (
        <div>
            <img src={`https://cataas.com/cat/says/${word}`} alt="cat" />
        </div>
    );
}
