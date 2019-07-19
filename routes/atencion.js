const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth')
const atencion = require('../models/atencion')


//GET ALL BY ID

router.get('/atenciones', (req, res, next) => {

    atencion.findAll()
        .then(atenciones => {
            res.json(atenciones)
        })
        .catch(err => {
            res.json(err)
        })
})



//INSERT

router.post('/postatencion', auth, (req, res) => {
    console.log(req.body);

    const newAtencion = {
        nombre,
        apellido,
        dni,
        celular,
        telefono,
        motivo,
        detalle_motivo,
        operador
    } = req.body;


    //Validacion simple

    if (!nombre || !apellido || !dni || !celular || !telefono || !motivo || !detalle_motivo || !operador) {
        return res.status(400).json({ msg: 'Todos los campos son obligatorios' })
    }

    atencion.create(newAtencion)
        .then(atencion => {
            res.json(atencion)
        })
})


    ;


//UPDATE

router.put('/putadherent/:id', (req, res) => {
    let cont = req.body;
    let id = req.params.contrato;
    let sql = `UPDATE adherent SET SUCURSAL = '${cont.sucursalReg}', NRO_DOC = '${cont.nrodocReg}', APELLIDOS= '${cont.apellidosReg}', NOMBRES = '${cont.nombreReg}', NACIMIENTO = '${cont.nacimientoReg}', CALLE= '${cont.calleReg}', LOCALIDAD = '${cont.localidadReg}' WHERE CONTRATO = ?`;

    mysqlConnection.query(sql, [id], (err, rows, fields) => {
        if (!err) {
            console.log('Update successfully')
        } else {
            console.log(err);
        }
    });
});



//DELETE

router.delete('/deleteadherent/:id', (req, res) => {
    mysqlConnection.query('DELETE FROM adherent WHERE CONTRATO = ?', [req.params.id], (err, rows, fields) => {
        if (!err) {
            res.json('delete  successfully');
        } else {
            console.log(err);
        }
    });

})

module.exports = router;