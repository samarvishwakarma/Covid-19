import { createSlice } from "@reduxjs/toolkit";
import { userList } from "./Data";

const userSlice = createSlice({
    name: "users",
    initialState: userList,
    reducers: {
        addContact: (state, action) => {
            state.push(action.payload)
        },
        updateUser: (state, action) => {
            const {id, firstName, lastName, status} = action.payload;
            const uu = state.find(user => user.id == id);
            if(uu) {
                uu.firstName = firstName;
                uu.lastName = lastName;
                uu.status = status;
            }
        },
        deleteUser: (state, action) => {
            const {id} = action.payload;
            const uu = state.find(user => user.id == id);
            if(uu) {
                return state.filter(f => f.id !== id);
            }
        }
    }
})

export const {addContact, updateUser, deleteUser} = userSlice.actions;
export default userSlice.reducer;