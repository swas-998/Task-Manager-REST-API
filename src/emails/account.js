const sgMail=require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail=(email,name)=>{
    sgMail.send({
        to:email,
        from:'swastikmishra50@gmail.com',
        subject:'Thanks for joining in!',
        text:`Welcome to the app, ${name}. Let me know how you get along with the app`
    })
}

const sendGoodbyeEmail=(email,name)=>{
    sgMail.send({
        to:email,
        from:'swastikmishra50@gmail.com',
        subject:'Goodbye, See you soon',
        text:`Adios , ${name}. let us know what went wrong`
    })
}

module.exports={
    sendWelcomeEmail,
    sendGoodbyeEmail
}