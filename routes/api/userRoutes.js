const router = require('express').Router();
const {
  getUser,
  getSingleUser,
  createUser,
  deleteUser,
  addThought,
  //addAssignment,
  //removeAssignment,
} = require('../../controllers/userController');

// /api/users
router.route('/').get(getUser).post(createUser);

// /api/users/:userId
router.route('/:userId').get(getSingleUser).delete(deleteUser);

// /api/students/:studentId/assignments
router.route(':userId/friends/:friendId').post(addThought);

// /api/students/:studentId/assignments/:assignmentId
//router.route('/:studentId/assignments/:assignmentId').delete(removeAssignment);

module.exports = router;
