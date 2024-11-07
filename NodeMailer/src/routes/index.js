import { Router } from 'express'

const router = Router()

import transporter from '../config/mailer.js'

router.post('/send-mail', async (req, res) => {
	//console.log(req.body)
	const { email, phone, message } = req.body

	const contentHTML = `
	<h1>User Information</h1>
	<ul>
	<li>Email ${email}</li>
	<li>Phone ${phone}</li> 		  
	</ul>
	<p>Mesage ${message}</p>
	`

	console.log(contentHTML)

	// Para enviar el mail
	// send mail with defined transport object
	const info = await transporter.sendMail({
    from: '"Forgot Password 👻" <maddison53@ethereal.email>', // sender address - desde donde
    to: "edwardrg0310@gmail.com", // list of receivers - hacia donde
    subject: "Hello ✔", // Subject line
    html: contentHTML, // html body
  });

	console.log("Message sent: %s", info.messageId);
  // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>

	res.send('received')
})

export default router;
