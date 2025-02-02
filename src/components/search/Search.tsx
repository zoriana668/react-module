import {FC, useState, useCallback} from "react";

interface SearchProps {
    onSearch: (query: string) => void;
}

export const Search:FC<SearchProps> = ({ onSearch }) => {
    const [query, setQuery] = useState("");

    const handleSearch = useCallback(() => {
        if (query.trim()) {
            onSearch(query.trim());
        }
    }, [query, onSearch]);

    return (
        <div className="search-container">

            <div className="input-group">
                <input type="text" className="search-input" placeholder="Пошук..." value={query}
                onChange={({ target }) => setQuery(target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                />

                <button className="search-button" onClick={handleSearch} disabled={!query.trim()}>
                    Шукати
                </button>
            </div>
        </div>
    );
};
