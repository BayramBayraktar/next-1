import ConnectDb from '../../../utils/database';
import User from '../../../models/User'
import jwt from 'jsonwebtoken'
import { serialize } from 'cookie'
//nodmailer config
import { Mail_Validator, Transporter } from '../../../utils/nodmailer'

export default async function Handler(req, res) {

  if (req.method == "POST") {
    const { mail_address } = req.body
    try {

      await ConnectDb();

      const registered_user = await User.findOne({ email: mail_address })
      if (registered_user) {

        let token = jwt.sign(
          { _id: registered_user._id }, // payload
          process.env.SECRET_KEY_JWT, //secret
          { expiresIn: '1h' }// the period of validity
        )
        res.setHeader("Set-Cookie", serialize("session", token, {
          httpOnly: true,
          maxAge: 60 * 60,
          path: "/",
          sameSite: "strict"
        })).json({ success: true })

      } else {

        //if the user is not in db, to send a token to his email
        let token = jwt.sign(
          { email: mail_address }, // payload
          process.env.SECRET_KEY_JWT, //secret
          { expiresIn: '1h' }// the period of validity
        );

        const mailOptions = await Mail_Validator(token, mail_address)

        Transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            return res.status(500).send("Internal server error");
          } else {
            return res.json({ mail_send: true });
          }
        })
      }
    } catch (error) {
      console.log(error)
    }
  } else {
    res.status(405).json({ error: 'Sadece POST istekleri desteklenir!' });
  }
}

