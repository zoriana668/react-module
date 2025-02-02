import { useState } from "react";

interface SearchProps {
    onSearch: (query: string) => void;
}

const Search: React.FC<SearchProps> = ({ onSearch }) => {
    const [query, setQuery] = useState("");

    return (
        <div>
            <input
                type="text"
                placeholder="Пошук..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <button onClick={() => onSearch(query)}>Шукати</button>
        </div>
    );
};

export default Search;
