import React from 'react'
import style from './style.module.css'
const Home_page = () => {
    return (
        <div className={`${style.wrapper}`}>
            <div className={style.container}>
                <div className={`${style.text_area} animate__animated animate__fadeInLeft`} >
                    <h1 className={style.title}>
                        Bring your code,
                        <br />
                        we'll handle the rest.
                    </h1>
                    <p className={style.text}>
                        Made for any language, for projects big and small. Railway is the cloud that takes the complexity out of shipping software.
                    </p>
                    <div className={style.button}>
                        Start a New Project
                    </div>
                </div>
                <img className={`${style.left_vector} animate__animated animate__rotateInDownLeft`} src='./computer-city-lines.svg' alt='' />
                <img className={`${style.right_vector} animate__animated animate__rotateInDownRight`} src='./deployments-sc.svg' alt='' />
            </div>
        </div>
    )
}

export default Home_page