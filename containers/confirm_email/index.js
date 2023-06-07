import React from 'react'
import style from './style.module.css'
const Confirm_Email = ({ mail_address }) => {
    return (
        <div className={style.wrapper}>
            <div className={style.container}>
                <img className={style.banner} src="/assets/svg/confirm.svg" alt='' />
                <h1 className={style.title}>Confirm your email</h1>
                <p>Log in using the magic link sent to</p>
                <b className={style.email}>{mail_address}</b>
                <a href=`googlegmail:///co?to=${mail_address}` target='_blank' >Go to your email address.</a>
            </div>
        </div>
    )
}

export default Confirm_Email
