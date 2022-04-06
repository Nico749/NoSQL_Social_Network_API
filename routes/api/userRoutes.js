const router = require('express').Router();
const {
  getUser,
  getSingleUser,
  createUser,
  deleteUser,
  addThought,
  updateUser,
  addFriend,
  deleteFriend
} = require('../../controllers/userController');

// /api/users
router.route('/').get(getUser).post(createUser);

// /api/users/:userId
router.route('/:userId').get(getSingleUser).delete(deleteUser).put(updateUser);


// /api/users/userId/thought
router.route(':userId/thought').post(addThought);

//api/users/:userId/friends/:friendId
router.route(':userId/friends/:friendId').post(addFriend).delete(deleteFriend)




module.exports = router;
