import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { setİsActive_Confirm_Email_page, setİsActive_login_modal, setMail_Addres } from '../../Store/Slices/Email'
import axios from 'axios'
// module css
import style from './style.module.css'

const Modal_Login = () => {
    const router = useRouter()
    const dispatch = useDispatch()

    const { mail_address } = useSelector((state) => state.Email)
    const [Msg, setMsg] = useState("")

    const handlerSubmit = async (e) => {
        e.preventDefault();
        await axios.post(`/api/auth/login`, { mail_address })
            .then((result) => {
                if (result && result.data) {
                    if (result.data.success) {
                        router.push("/dashboard")
                        dispatch(setİsActive_login_modal(false))
                    }
                    if (result && result.data.mail_send) {
                        dispatch(setİsActive_Confirm_Email_page(result.data.mail_send))
                    }
                }
            }).catch((error) => {
                if (error.response) {
                    setMsg(error.response.data)
                }
            })
    }


    return (
        <div className={style.modal}>
            <div onClick={() => dispatch(setİsActive_login_modal(false))} className={style.back_drop}></div>
            <div className={style.container}>
                <div className={style.banner}>
                    <i onClick={() => dispatch(setİsActive_login_modal(false))} class="ri-close-fill"></i>
                    <img src="/assets/svg/Login-logo.svg" alt='' />
                </div>
                <form onSubmit={handlerSubmit} >
                    <input onChange={(e) => dispatch(setMail_Addres(e.target.value))} type='email' placeholder='hello@email.com' value={mail_address} />
                    <button className={style.btn_email} type='submit'>
                        <i class="ri-mail-line"></i>
                        <span>Email</span>
                    </button>
                    <button className={style.btn_github} type='button'>
                        <i class="ri-github-fill"></i>
                        <span>GitHub</span>
                    </button>
                    <p className={style.Msg}>{Msg}</p>
                </form>
            </div>
        </div>
    )
}

export default Modal_Login