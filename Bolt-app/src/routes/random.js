const { Router } = require('express');
const router = Router();
const { getRandom } = require('../controllers/random.controller.js');

router.route('/')
        .get(getRandom)

module.exports = router;