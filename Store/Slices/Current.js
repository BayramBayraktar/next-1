import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    Current_User: ""
}

const Slice_Current_User = createSlice({
    name: "Current",
    initialState,
    reducers: {
        setCurrent_User: (state, action) => {
            state.Current_User = action.payload
        }
    }
})

export const { setCurrent_User } = Slice_Current_User.actions
export default Slice_Current_User.reducer