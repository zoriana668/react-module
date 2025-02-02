import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../api/usersApi";
import { setUsers } from "../redux/slices/usersSlice";
import { RootState } from "../redux/store";
import { IUser } from "../types/user";
import { Link } from "react-router-dom";
import Search from "../components/Search";
import Pagination from "../components/Pagination";

const Users = () => {
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
        const results = users.filter((user) =>
            user.username.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredUsers(results);
    };

    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

    return (
        <div>
            <h2>Користувачі</h2>
            <Search onSearch={handleSearch} />
            <ul>
                {currentUsers.map((user) => (
                    <li key={user.id}>
                        <Link to={`/users/${user.id}`}>{user.username}</Link> ({user.email})
                    </li>
                ))}
            </ul>
            <Pagination
                currentPage={currentPage}
                totalPages={Math.ceil(filteredUsers.length / usersPerPage)}
                onPageChange={setCurrentPage}
            />
        </div>
    );
};

export default Users;
