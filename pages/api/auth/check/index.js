import ConnectDb from '@/utils/database.js'
import jwt from 'jsonwebtoken'
import User from '@/models/User'

export default async (req, res) => {
    if (req.method === "GET") {
        try {
            await ConnectDb()

            const authorization = await req.headers.authorization
            const token = authorization.split(" ")[1]

            if (token) {
                const decoded = jwt.verify(token, process.env.SECRET_KEY_JWT)
                if (decoded) {
                    const currentUser = await User.findOne({ _id: decoded._id })
                    if (currentUser) {
                        return res.json({ success: true, currentUser: currentUser })
                    } else {
                        return res.json({ success: false, currentUser: {} })
                    }
                }
            } else {
                return res.json({ success: false, currentUser: {} })
            }
        } catch (error) {
            res.status(500).json({ error: "Internal Server error" })
        }
    }

}