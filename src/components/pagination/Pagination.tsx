import {FC} from "react";

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

export const Pagination:FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
    return (
        <div className="pagination-block">
            {[...Array(totalPages)].map((_, index) => (
                <button className="pagination-btn" key={index} onClick={() => onPageChange(index + 1)} disabled={index + 1 === currentPage}>
                    {index + 1}
                </button>
            ))}
        </div>
    );
};

