const { Router } = require('express');
const router = Router();
const { getCargador, createCargador} = require('../controllers/cargador.controller');
router.route('/')
        .get(getCargador)
        .post(createCargador)
router.route('/:id')
        //.get((req, res) => res.send('Cargadores Routes'))
        //.path()
        //.put()

module.exports = router;