import Head from 'next/head'
//component
import Header from '../components/header'


const Main_layout = ({ children, title }) => {

    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            < Header />
            <main>
                {children}
            </main>
        </>
    )
}

export default Main_layout