import React from 'react'
import style from './style.module.css'
const Confirm_Email = ({ mail_address }) => {
        
    const handlerEmail = () => {
         const url = `googlegmail:///co?to=${mail_address}`;
          window.open(url);
    }
    
    
    return (
        <div className={style.wrapper}>
            <div className={style.container}>
                <img className={style.banner} src="/assets/svg/confirm.svg" alt='' />
                <h1 className={style.title}>Confirm your email</h1>
                <p>Log in using the magic link sent to</p>
                <b className={style.email}>{mail_address}</b>
                <a  onClick={()=> handlerEmail()} >Go to your email address.</a>
            </div>
        </div>
    )
}

export default Confirm_Email
