import { useEffect, useState } from 'react'
import axios from 'axios'
import Layout from '../../layouts/main'
import style from './style.module.css'

import LinChart from '../../components/LineCart'


const Dashboard = (props) => {

    const [bitcoinData, setBitcoinData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            await axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd&include_24hr_vol=true&include_24hr_change=true&include_last_updated_at=true`).then((response) => {
                if (response.data) {
                    setBitcoinData(response.data.bitcoin)
                }
            })
        }

        fetchData()

        const interval = setInterval(() => {
            fetchData()
        }, 30000)

        return () => {
            clearInterval(interval)
        }
    }, [])

    const getLabels = () => {
        return [
            // bitcoinData.lebels
            "1", "2", "3", "4", "5", "6", "7"];
    };

    const getPrices = () => {
        return [
            // bitcoinData?.usd
            "200", "170", "140", "250", "300", "220", "500"
        ];
    };

    const data = {
        labels: getLabels(),
        datasets: [
            {
                label: "Bitcoin Usd",
                data: getPrices(),
                borderColor: "blue",
                fill: false,
            },
            /*{
                label: "Bitcoin",
                data: getPrices(),
                borderColor: "red",
                fill: false,
            }*/

        ],
    }

    const options = {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
            }
        }
    }

    return (
        <Layout title={"Dashboard"}>
            <div className={style.wrapper} >
                <div className={style.container}>
                    <div className={style.Cart}>
                        <LinChart chartData={data} options={options} />
                    </div>
                    <div className={style.Current}>
                        <h1> {props.user._id}</h1>
                        <h1> {props.user.email}</h1>
                    </div>
                </div>
            </div>
        </Layout >
    )
}

export default Dashboard

