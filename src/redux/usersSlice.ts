import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../types/user";

interface UsersState {
    users: IUser[];
}

const initialState: UsersState = {
    users: [],
};

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        setUsers(state, action: PayloadAction<IUser[]>) {
            state.users = action.payload;
        },
    },
});

export const { setUsers } = usersSlice.actions;
export default usersSlice.reducer;
