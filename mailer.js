const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
async function main() {

    // create reusable transporter object using the default SMTP transport
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: 'angel.aguirre6414@alumnos.udg.mx',
            pass: 'tqrzamqindynfxnd'
        }
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: '"Angel Aguirre" <angel.aguirre6414@alumnos.udg.mx>', // sender address
        to: "aeaguirre321@gmail.com", // list of receivers
        subject: "Prueba desde disney", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

main().catch(console.error);
