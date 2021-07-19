const { Router } = require('express');
const router = Router();
const { createUser, getUsers, getOneUser, updateUser, removeUser } = require('../controllers/user-controller');

router.post('/', createUser);
router.get('/', getUsers);
router.get('/:id', getOneUser);
router.put('/:id', updateUser);
router.delete('/:id', removeUser);

module.exports = router;