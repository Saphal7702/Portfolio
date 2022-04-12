const router = require("express").Router();
require("dotenv").config();

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.MAIL_API);

router.post("/contact", (req, res) => {
  let data = req.body;
  console.log(data);
  if (
    data.name.length === 0 ||
    data.email.length === 0 ||
    data.message.length === 0
  ) {
    return res.json({ msg: "Please Fill All The Fields!" });
  }

  const emailData = {
    to: "saphal7702@gmail.com",
    from: "saphalkarki97@gmail.com",
    subject: `${data.name} wants to connect`,
    html: `
    <h3>Informations<h3/>
    <ul>
    <li>Name: ${data.name}<li/>
    <li>Email: ${data.email}<li/>
    </ul>
    <h3>Message</h3>
    <p>${data.message}<p/>
    `,
};
sgMail
  .send(emailData)
  .then((response) => {
    res.status(200).json({ msg: "Thank You For Contacting." });
  })
  .catch((error) => {
    return res.status(500).json({ msg: "There is server error" })
  })
});
module.exports = router;
