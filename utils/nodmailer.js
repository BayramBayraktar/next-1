import nodemailer from 'nodemailer'

export const Transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "bayrambayraktar091@gmail.com",
    pass: "mysbfbaotmmgwkro"
  },
  tls: {
    rejectUnauthorized: false //  should be true when the test is finished
  },

})


export const Mail_Validator = async (token, mail_address) => {
  const mail_content = `
        <html>
          <head>
            <style>
             .container {
                text-align:center;
                background: #000;
                color: #fff !important;
                padding: 20px;
             }
        
              h1{
                font-size:3rem;
                color:gray;
              }
              
              p{
                font-size:1.5rem;
                color:gray;

              }
              a {
                color:#fff !important;
                text-decoration:none;
                margin:10px;
                font-size:1.3rem;
                border:solid 1px #fff;
                padding:1rem;
              }
             
            </style>
          </head>
          <body>
             <div class="container">
             <h1>e-mail confirm</h1>
             <p>please click the link below to secure it</p>
             <a href="${process.env.API_URL}/auth/verify/${token}">Verify account</a>
             </div>
          </body>
        </html>                       
      `;
  const mailOptions = {
    from: `Verify your email`,
    to: mail_address,
    subject: "test!",
    html: mail_content
  }

  return mailOptions

}



