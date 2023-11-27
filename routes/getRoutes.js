const router = require('express').Router();
const getController = require('../controllers/getController');

router.get('/api/users', getController.getUsers);
router.get('/api/users/:id/logs', getController.getLogs);

module.exports = router;