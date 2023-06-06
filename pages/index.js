import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { setCurrent_User } from '../Store/Slices/Current'
import { setİsActive_login_modal } from '../Store/Slices/Email'
import { isAuth } from '@/utils/Auth.js'
import Layout from '@/layouts/main.js'
import Home from '../containers/home'
import Email_Confirm_Page from '../containers/confirm_email'


const Home_page = ({ response }) => {
  const router = useRouter()
  const dispatch = useDispatch()

  const { Email } = useSelector((state) => state)

  useEffect(() => {
    if (response?.success) {
      dispatch(setCurrent_User(response?.currentUser))
    } else {
      dispatch(setCurrent_User(""))
    }
  }, [response])



  useEffect(() => {
    document.addEventListener("visibilitychange", () => {
      if (document.visibilityState === 'visible') {
        if (localStorage.getItem("verify")) {
          router.push("/dashboard")
          dispatch(setİsActive_login_modal(false))
        }
      }
    });
  }, []);


  return (
    <>
      {
        Email.isActive_Confirm_Email_page ?
          (
            <Email_Confirm_Page mail_address={Email.mail_address} />
          ) : (
            <Layout title="Home-Page" >
              <Home />
            </Layout>
          )
      }
    </>
  )
}

export default Home_page


export async function getServerSideProps(context) {
  const token = context.req.cookies
  const response = await isAuth(token)

  return {
    props: {
      response
    }
  };
}