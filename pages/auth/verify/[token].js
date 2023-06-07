import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import style from './style.module.css'
import axios from 'axios'

const Token_Confirm = () => {
    const router = useRouter()
    const [Visibility, setVisibility] = useState(false)

    useEffect(() => {
        const handlerGet = async () => {
            if (router?.query?.token) {
                await axios.get(`/api/verify/${router.query.token}`)
                    .then((response) => {
                        if (response?.data?.success) {
                            setVisibility(response.data?.success)
                            localStorage.setItem("verify", true)
                        }
                    }).catch((error) => {
                        console.log(error)
                    })
            }
        }
        handlerGet()
    }, [router])

    return Visibility && (
        <div className={style.wrapper}>
            <div className={style.container}>
                <img src="/assets/svg/Login-logo.svg" alt='' />
                <h1><b>Login Complete!</b></h1>
                <h1>Go back to <b>Railway</b></h1>
                <p>you can close this window</p>
            </div>
        </div>
    )
}

export default Token_Confirm

