import express from 'express';
const router: express.Router = express.Router();

router.use('/players', require('./players'));
router.use('/spaceships', require('./spaceships'));

module.exports = router;