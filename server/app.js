//cargar las dependencias

require('dotenv').config();

const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

//configurar body para manejar los datos del formulario
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//servir los archivos estáticos (HTML, CSS, JS) desde la carpeta 'public'
app.use(express.static(path.join(__dirname, '../public')));

//ruta para procesar el formulario de contacto
app.post('/send-email', (req, res) => {
    const { name, email, message } = req.body;

    //configuración de Nodemailer
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: EMAIL_PASS
        }
    })
});

const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: 'Nuevo mensaje del formulario de contacto',
    text:`name: ${name}\nCorreo: ${email}\nMensaje:${message}`
};

transporter.sendMail(mailOptions, (error, info) => {
    
})