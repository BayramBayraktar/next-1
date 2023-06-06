import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isActive_Confirm_Email_page: false,
    mail_address: "",
    isActive_login_modal: false
}

const Confirm_Email = createSlice({
    name: "Confirm_Email",
    initialState,
    reducers: {
        setİsActive_Confirm_Email_page: (state, action) => {
            state.isActive_Confirm_Email_page = action.payload
        },
        setMail_Addres: (state, action) => {
            state.mail_address = action.payload
        },
        setİsActive_login_modal: (state, action) => {
            state.isActive_login_modal = action.payload
        }
    }
})

export const { setİsActive_Confirm_Email_page, setMail_Addres, setİsActive_login_modal } = Confirm_Email.actions
export default Confirm_Email.reducer