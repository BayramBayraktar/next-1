import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setCurrent_User } from '../../Store/Slices/Current'
import { isAuth } from '@/utils/Auth.js'
//layout
import Layout from '../../layouts/main'
import Dashboard from '../../containers/dashboard'


const Dashboard_Page = ({ response }) => {
  const dispatch = useDispatch()

  useEffect(() => {
    if (localStorage.getItem("verify")) {
      return localStorage.removeItem("verify")
    }
  }, [])

  useEffect(() => {
    if (response?.success) {
      dispatch(setCurrent_User(response?.currentUser))
    } else {
      dispatch(setCurrent_User(""))
    }
  }, [response])



  return (
    <Layout title={"Deshboard"}>
      <Dashboard user={response?.currentUser} />
    </Layout>
  )
}

export default Dashboard_Page

export const getServerSideProps = async (context) => {
  const token = context.req.cookies
  const response = await isAuth(token)

  if (response && response.success) {
    return {
      props: {
        response
      }
    }
  } else {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      }
    }
  }

}