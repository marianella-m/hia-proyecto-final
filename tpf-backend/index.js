const express = require('express'); 
const cors = require('cors'); 
const {mongoose} = require('./database');
const dotenv = require("dotenv");
const path = require('path');
const fs = require('fs');
const pdfController = require('./controllers/pdf.controller');
const cron = require('node-cron');
const axios = require('axios'); 

var app = express();

//middlewares 
// Ruta para servir archivos estáticos desde la carpeta 'temp'
app.use('/temp', express.static(path.join(__dirname, 'temp'))); 
app.use(express.json());
app.use(cors({
    origin: 'https://amazone-s7q7.onrender.com',
    credentials: true
}));

//config token
dotenv.config();

//Direccionamiento de rutas
app.use('/api/usuario', require('./routes/usuario.route.js'));
app.use('/api/alquiler', require('./routes/alquiler.route.js'));
app.use('/api/local', require('./routes/local.route.js'));
app.use('/api/novedad', require('./routes/novedad.route.js'));
app.use('/api/cuota', require('./routes/cuota.route.js'));
app.use('/api/promocion', require('./routes/promocion.route.js'));
app.use('/api/mercadopago', require('./routes/mp.route.js'));
app.use('/api/pdf', require('./routes/pdf.route.js'));
//setting
app.set('port', process.env.PORT || 3000);

//Funcion en segundo plano para generar Cuotas
cron.schedule('0 0 * * *', () => {
//cron.schedule('*/10 * * * * *', () => { //Cada 10 seg
    console.log('Verificando cuotas de alquileres');

    //Genera las cuotas necesarias para los alquileres
    axios.post('https://amazone-back.onrender.com/api/alquiler/generarCuotas')
        .then(response => {
            console.log('Cuotas Verificadas');
        })
        .catch(error => {
            console.error('Error al verificar cuotas');
        });

    //Verifica el vencimiento de las cuotas. A las cuotas vencidas se le agrega un 10% de recargo
    axios.post('https://amazone-back.onrender.com/api/alquiler/verificarCuotasVencidas')
        .then(response => {
            console.log('Cuotas vencidas Verificadas');
        })
        .catch(error => {
            console.error('Error al verificar cuotas vencidas');
        });
}, {
    scheduled: true,
    timezone: "America/Argentina/Jujuy"
});
// Endpoint para generar y descargar el PDF
app.post('/api/pdf/generate', (req, res) => {
    const data = req.body; // Datos para generar el PDF
  
    // Llamar a la función del controlador para generar el PDF
    pdfController.generatePDF(data, (err, pdfFileName) => {
      if (err) {
        console.error('Error al generar el PDF:', err);
        return res.status(500).send('Error al generar el PDF');
      }
  
      // Devolver la URL completa del PDF al frontend
      const pdfUrl = `https://amazone-back.onrender.com/temp/${pdfFileName}`;
      res.json({ pdfUrl });
    });
  });

//starting the server
app.listen(app.get('port'), () => {
    console.log(`Servidor iniciado en el puerto`, app.get('port'));
});