const nodemailer = require("nodemailer");

const config = require('../../config/config');

const transporter = nodemailer.createTransport({
    host: config.emailHost,
    port: config.emailPort,
    secure: config.emailSecure,
    auth: {
        user: config.emailUser,
        pass: config.emailPassword
    }
});

async function sendWelcomeEmail(user) {

    await transporter.sendMail({
        from: config.emailFrom,
        to: user.email,
        subject: `Welcome, ${user.name}!`,
        text: "We are really happy that you join us! Here, you can see many things about Disnery world, we hope you enjoy this app.",
    });
}

module.exports = { sendWelcomeEmail }
