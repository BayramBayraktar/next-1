import React, { useEffect } from 'react'
import Link from 'next/link'
import style from './style.module.css'

import { useDispatch, useSelector } from 'react-redux'
import { setİsActive_login_modal } from '../../Store/Slices/Email'
import axios from 'axios'

// conponent 
import LoginModal from '../Modal_Login'

const Header = () => {
    const dispatch = useDispatch()

    const { Current_User } = useSelector((state) => state.Current)
    const { isActive_login_modal } = useSelector((state) => state.Email)


    useEffect(() => {
        if (isActive_login_modal) {
            document.body.classList.add("fixed")
        } else {
            return document.body.classList.remove("fixed")
        }
    }, [isActive_login_modal])


    const handlerLogOut = async () => {
        await axios.get(`${process.env.API_URL}/api/auth/logout`).then((response) => {
            if (response && response.data && response.data.success) {
                return window.location.href = "/"
            }
        })
    }

    return (
        <div id='header' className={`${style.wrapper} animate__animated animate__fadeInDown  theme`}>
            <header className={style.header}>
                <div className={style.logo}>
                    <Link href="/">
                        <svg xmlns="http://www.w3.org/2000/svg"
                            width="1024" height="1024"
                            viewBox="0 0 1024 1024" fill="none">
                            <path d="M4.756 438.175A520.713 520.713 0 0 0 0 489.735h777.799c-2.716-5.306-6.365-10.09-10.045-14.772-132.97-171.791-204.498-156.896-306.819-161.26-34.114-1.403-57.249-1.967-193.037-1.967-72.677 0-151.688.185-228.628.39-9.96 26.884-19.566 52.942-24.243 74.14h398.571v51.909H4.756ZM783.93 541.696H.399c.82 13.851 2.112 27.517 3.978 40.999h723.39c32.248 0 50.299-18.297 56.162-40.999ZM45.017 724.306S164.941 1018.77 511.46 1024c207.112 0 385.071-123.006 465.907-299.694H45.017Z" fill="#100F13" />
                            <path d="M511.454 0C319.953 0 153.311 105.16 65.31 260.612c68.771-.144 202.704-.226 202.704-.226h.031v-.051c158.309 0 164.193.707 195.118 1.998l19.149.706c66.7 2.224 148.683 9.384 213.19 58.19 35.015 26.471 85.571 84.896 115.708 126.52 27.861 38.499 35.876 82.756 16.933 125.158-17.436 38.97-54.952 62.215-100.383 62.215H16.69s4.233 17.944 10.58 37.751h970.632A510.385 510.385 0 0 0 1024 512.218C1024.01 229.355 794.532 0 511.454 0Z" fill="#100F13" />
                        </svg>
                        <span className={style.logo_text}>Railway</span>
                    </Link>
                </div>
                {
                    !Current_User ?
                        <nav className={style.nav}>
                            <li>
                                <Link href="/blog" >Blog</Link>
                            </li>
                            <li>
                                <Link href="/Docs" >Docs</Link>
                            </li>
                            <li>
                                <Link href="/About" >About</Link>
                            </li>
                            <li>
                                <Link href="/Help" >Help</Link>
                            </li>
                            <li>
                                <Link href="/Careers" >Careers</Link>
                            </li>
                            <li>
                                <Link href="/Pricing" >Pricing</Link>
                            </li>

                            <li onClick={() => dispatch(setİsActive_login_modal(true))}>
                                <a>Login</a>
                            </li>
                        </nav>
                        :
                        <nav className={style.nav}>
                            <li>
                                <Link href="/docs">Docs</Link>
                            </li>
                            <li>
                                <Link href="/Help" >Help</Link>
                            </li>
                            <li>
                                <Link href="/dashboard">dashboard</Link>
                            </li>
                            <li onClick={() => handlerLogOut()} >
                                <a>Logout</a>
                            </li>
                        </nav>
                }


            </header>
            {
                isActive_login_modal && <LoginModal />
            }
        </div>
    )
}

export default Header
