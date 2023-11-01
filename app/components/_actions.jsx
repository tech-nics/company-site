"use server"

const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    service:"gmail",
    host: "smtp.gmail.com",
    port: 587,
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
});

export async function sendEmail(data){
    
    try {
        const mail = await transporter.sendMail({
            from: data.email,
            to: "techplusnics@gmail.com",
            subject: `Website activity from ${data.name}`,
            html: `
            <p>Name: ${data.name} </p>
            <p>Email: ${data.email} </p>
            <p>Message: ${data.msg} </p>
            `,
        })
        return true
    } catch (error) {
        return false
    }
}