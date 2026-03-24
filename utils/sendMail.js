const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 587,
    secure: false, // Use true for port 465, false for port 587
    auth: {
        user: "679344019ba7e8",
        pass: "4dbbc156de395c",
    },
});

module.exports = {
    sendMail: async function (to, url) {
        await transporter.sendMail({
            from: 'admin@haha.com',
            to: to,
            subject: "reset password email",
            text: "click vao day de doi pass", // Plain-text version of the message
            html: "click vao <a href=" + url + ">day</a> de doi pass", // HTML version of the message
        })
    },
    sendCredentials: async function (to, username, password) {
        await transporter.sendMail({
            from: 'admin@haha.com',
            to: to,
            subject: "Your Account Credentials",
            text: `Hello ${username},\n\nYour account has been created.\nUsername: ${username}\nPassword: ${password}\n\nPlease keep this information secure.`,
            html: `Hello <b>${username}</b>,<br><br>Your account has been created.<br>Username: <b>${username}</b><br>Password: <b>${password}</b><br><br>Please keep this information secure.`,
        })
    }
}
