//importar la libreria
const express = require("express")
const bodyparser =require("body-parser")
const parth= require("path")

//objetos para llamar metodos de express
const app = express();

app.use(bodyparser.urlencoded)({
    extended: true
});

app.use(express.static(path.join(__dirname,'public')));

app.set('view engine','ejs');
app.set('view',path.join(__dirname, 'views'));

require('.config/database');

// 404 esto puedes ponerlo o no depende de ti 
app.use((req, res) => {
    res.status(404).send('Página no encontrada');
});

// Exporta la aplicación para que la usemos en el otro archivo que creamos el delnserver
module.exports = app;
//ruta incial
app.get("/index.html",function(req,res){
})

//configurar el puerto usado para el servidor local
app.listen(3000,function(){
    console.log("Servidor creado correctamente https://localhost:3000");
});

const db = require('../config/database');
const { name } = require("ejs");

// Mostrar formulario (CREATE/UPDATE)
exports.showForm = (req, res) => {
    if (req.params.id) {
        // Modo edición
        db.get('SELECT * FROM Contacts WHERE id = ?', [req.params.id], (err, row) => {
            if (err) {
                console.error(err.message);
                return res.redirect('/items');
            }
            res.render('formulario', { item: row });
        });
    } else {
        // Modo creación
        res.render('formulario', { item: null });
    }
};

// Procesar creación (CREATE)
exports.Contacts = (req, res) => {
    const { name, Apellido, mail, password } = req.body;
    
    db.run(
        'INSERT INTO Contacts (name, Apellido, mail, password) VALUES (?, ?)',
        [name, Apellido, mail, password],
        function(err) {
            if (err) {
                console.error(err.message);
                return res.redirect('/formulario');
            }
            res.redirect('/items');
        }
    );
};

// Listar items (READ)
exports.listItems = (req, res) => {
    db.all('SELECT * Contacts ORDER BY name', [], (err, rows) => {
        if (err) {
            console.error(err.message);
            return res.status(500).send('Error al obtener los datos');
        }
        res.render('lista', { items: rows });
    });
};

// Procesar actualización (UPDATE)
exports.updateItem = (req, res) => {
    const { id } = req.params;
    const { nombre, Apellido, mail, password} = req.body;
    
    db.run(
        'UPDATE Contacts SET Id = ? name = ?, Apellido = ?, mail = ?, password = ? WHERE id = ?',
        [name, Apellido, mail, password,id],
        function(err) {
            if (err) {
                console.error(err.message);
                return res.redirect(/editar/$,{id});
            }
            res.redirect('/items');
        }
    );
};

// Eliminar item (DELETE)
exports.deleteItem = (req, res) => {
    const { id } = req.params;
    
    db.run('DELETE FROM Contacts WHERE id = ?', [id], function(err) {
        if (err) {
            console.error(err.message);
        }
        res.redirect('/items');
    });
};

app.get('/usuarios/:id', (req, res) => {
    const id = req.params.id;
    db.get('SELECT * FROM name WHERE id = ?', [id], (err, row) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        row ? res.json(row) : res.status(404).json({ error: "Usuario no encontrado" });
    });
});

app.post('/usuarios', (req, res) => {
    const { nombre, Apellido, mail, password } = req.body;
    db.run('INSERT INTO name (Id,name, Apellido, mail, password) VALUES (?, ?)', [Id,name, Apellido, mail, password], function(err) {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ id: this.lastID, name, Apellido, mail, password });
    });
});

exports.showForm = (req, res) => {
    if (req.params.id) {
        // Modo edición
        db.get('SELECT * FROM pagos WHERE id = ?', [req.params.id], (err, row) => {
            if (err) {
                console.error(err.message);
                return res.redirect('/items');
            }
            res.render('formulario', { item: row });
        });
    } else {
        // Modo creación
        res.render('formulario', { item: null });
    }
};

// Procesar creación (CREATE)
exports.pagos = (req, res) => {
    const {Id,num_tar,ven_mes,ven_anio,cod_seg,Moneda,Monto} = req.body;
    
    db.run(
        'INSERT INTO pagos (Id,num_tar,ven_mes,ven_anio,cod_seg,Moneda,Monto) VALUES (?, ?)',
        [Id,num_tar,ven_mes,ven_anio,cod_seg,Moneda,Monto],
        function(err) {
            if (err) {
                console.error(err.message);
                return res.redirect('/formulario');
            }
            res.redirect('/items');
        }
    );
};

// Listar items (READ)
exports.listItems = (req, res) => {
    db.all('SELECT * pagos ORDER BY name', [], (err, rows) => {
        if (err) {
            console.error(err.message);
            return res.status(500).send('Error al obtener los datos');
        }
        res.render('lista', { items: rows });
    });
};

// Procesar actualización (UPDATE)
exports.updateItem = (req, res) => {
    const { id } = req.params;
    const { Id,num_tar,ven_mes,ven_anio,cod_seg,Moneda,Monto } = req.body;
    
    db.run(
        'UPDATE pagos SET Id = ? num_tar = ?, ven_mes = ?, ven_anio = ?, cod_seg = ? Moneda = ? Monto = ? WHERE id = ?',
        [Id,num_tar,ven_mes,ven_anio,cod_seg,Moneda,Monto],
        function(err) {
            if (err) {
                console.error(err.message);
                return res.redirect(/editar/$,{id});
            }
            res.redirect('/items');
        }
    );
};

// Eliminar item (DELETE)
exports.deleteItem = (req, res) => {
    const { id } = req.params;
    
    db.run('DELETE FROM pagos WHERE id = ?', [id], function(err) {
        if (err) {
            console.error(err.message);
        }
        res.redirect('/items');
    });
};

app.get('/usuarios/:id', (req, res) => {
    const id = req.params.id;
    db.get('SELECT * FROM num_tar WHERE id = ?', [id], (err, row) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        row ? res.json(row) : res.status(404).json({ error: "Usuario no encontrado" });
    });
});

app.post('/usuarios', (req, res) => {
    const { nombre, edad } = req.body;
    db.run('INSERT INTO num_tar (Id,num_tar,ven_mes,ven_anio,cod_seg,Moneda,Monto) VALUES (?, ?)', [Id,num_tar,ven_mes,ven_anio,cod_seg,Moneda,Monto], function(err) {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ id: this.lastID, Id,num_tar,ven_mes,ven_anio,cod_seg,Moneda,Monto });
    });
});