import ConnectDb from '../../../utils/database'
import jwt from 'jsonwebtoken'
import User from '../../../models/User'
import { serialize } from 'cookie'

export default async (req, res) => {
    if (req.method === "GET") {
        try {
            await ConnectDb()
            const { token } = req.query
            if (token) {
                const decoded = jwt.verify(token, process.env.SECRET_KEY_JWT)
                if (decoded) {
                    const newUser = User({
                        email: decoded.email
                    })
                    const savedUser = await newUser.save();

                    if (savedUser) {
                        const user_id = savedUser._id
                        const newToken = jwt.sign({ _id: user_id }, process.env.SECRET_KEY_JWT, { expiresIn: '1h' });
                        res.setHeader("Set-Cookie", serialize("session", newToken, {
                            httpOnly: true,
                            maxAge: 60 * 60,
                            sameSite: "strict",
                            path: "/"
                        })).json({ success: true })
                    }
                }

            } else {
                res.status(405).json({ error: 'An unexpected error occurred!' });
            }
        } catch (error) {
            res.status(500).json({ error: "Internal Server error" })
        }
    }

}