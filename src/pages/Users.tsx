import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../api/usersApi";
import { setUsers } from "../redux/usersSlice";
import { RootState } from "../redux/store";
import { IUser } from "../models/user/IUser";
import { Link } from "react-router-dom";
import { Search } from "../components/search/Search";
import { Pagination } from "../components/pagination/Pagination";

export const Users = () => {
    const dispatch = useDispatch();
    const users = useSelector((state: RootState) => state.users.users);
    const [filteredUsers, setFilteredUsers] = useState<IUser[]>(users);
    const [currentPage, setCurrentPage] = useState(1);
    const usersPerPage = 5;

    useEffect(() => {
        fetchUsers().then((data) => dispatch(setUsers(data.users)));
    }, [dispatch]);

    useEffect(() => {
        setFilteredUsers(users);
    }, [users]);

    const handleSearch = (query: string) => {
        if (!query.trim()) {
            setFilteredUsers(users);
            return;
        }

        if (!isNaN(Number(query))) {
            // Якщо введене значення - це число (ID)
            const userById = users.find((user) => user.id === Number(query));
            setFilteredUsers(userById ? [userById] : []);
        } else {
            // Якщо введене значення - це текст (username)
            const results = users.filter((user) =>
                user.username.toLowerCase().includes(query.toLowerCase())
            );
            setFilteredUsers(results);
        }
    };

    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

    return (
        <div className="users-container">
            <h2>Користувачі</h2>
            <Search onSearch={handleSearch} />
            <ul>
                {currentUsers.length > 0 ? (
                    currentUsers.map((user) => (
                        <li key={user.id}>
                            <Link to={`/users/${user.id}`}>
                                {user.username} ({user.email})
                            </Link>
                        </li>
                    ))
                ) : (
                    <p>Користувача не знайдено</p>
                )}
            </ul>
            <Pagination
                currentPage={currentPage}
                totalPages={Math.ceil(filteredUsers.length / usersPerPage)}
                onPageChange={setCurrentPage}
            />
        </div>
    );
};
