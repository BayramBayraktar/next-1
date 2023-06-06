
export const isAuth = async (cookie) => {
    if (cookie.session) {
        const data = await fetch(`${process.env.API_URL}/api/auth/check`, {
            headers: {
                Authorization: `Bearer ${cookie.session}`
            }
        })
        const response = await data.json()
        return response
    } else {
        return false
    }

}