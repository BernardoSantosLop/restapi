const { Router } = require('express');
const controllers = require('../controllers');

const router = Router();
router.get('/', (req, res) => res.send('Welcome'))

router.post('/movie', controllers.createUser);

router.get('/movies', controllers.getAllUsers);

module.exports = router;