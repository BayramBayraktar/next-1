
export const isAuth = async (cookie) => {
    if (cookie.session) {
        const data = await fetch(`https://next-1-phi.vercel.app/api/auth/check`, {
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
