import express from 'express';
import { normalize } from 'path';

const app =express();
const PORT = normalizePort(process.env.PORT || '3000');


//Middleware para archivos estaticos
app.use(express.static('public'));

app.use(express.json());

app.get('/', (req, res) =>{
   res.send('¡Servidor funcionando correctamente');
});

app.listen(PORT, ()=>{
    console.log('Servidor corriendo en http://localhost:${PORT}');
});

