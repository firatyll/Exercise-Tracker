const router = require('express').Router();
const postController = require('../controllers/postController');

router.post('/api/users', postController.createUser);
router.post('/api/users/:id/exercises', postController.createExercise);

module.exports = router;