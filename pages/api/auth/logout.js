import { serialize } from "cookie"

export default async (req, res) => {
    try {
        res.setHeader("Set-Cookie", serialize("session", "", {
            httpOnly: true,
            sameSite: "strict",
            path: "/",
            maxAge: 0,
        })).json({ success: true })
    } catch (error) {
        console.log(error)
    }
}
