const {User,Thougth} = require('../models')

module.exports = {
    // Get all users
    getUser(req, res) {
      User.find()
        .then(async (users) => {
          const userObj = {
            users,
            //headCount: await headCount(),
          };
          return res.json(userObj);
        })
        .catch((err) => {
          console.log(err);
          return res.status(500).json(err);
        });
    },
    // Get a single user
    getSingleUser(req, res) {
      User.findOne({ _id: req.params.userId })
        .lean()
        .then(async (user) =>
          !user
            ? res.status(404).json({ message: 'No user with that ID' })
            : res.json({
                user,
                grade: await grade(req.params.userId),
              })
        )
        .catch((err) => {
          console.log(err);
          return res.status(500).json(err);
        });
    },
    // create a new user
    createUser(req, res) {
      User.create(req.body)
        .then((user) => res.json(user))
        .catch((err) => res.status(500).json(err));
    },
    // Delete a user and remove them from the course
    deleteUser(req, res) {
      User.findOneAndRemove({ _id: req.params.userId })
        .then((user) =>
          !user
            ? res.status(404).json({ message: 'No such user exists' })
            : Course.findOneAndUpdate(
                { students: req.params.studentId },
                { $pull: { students: req.params.studentId } },
                { new: true }
              )
        )
        // .then((course) =>
        //   !course
        //     ? res.status(404).json({
        //         message: 'Student deleted, but no courses found',
        //       })
        //     : res.json({ message: 'Student successfully deleted' })
        // )
        // .catch((err) => {
        //   console.log(err);
        //   res.status(500).json(err);
        // });
    },
  
    // Add an assignment to a user
    addThought(req, res) {
      console.log('You are adding a thought');
      console.log(req.body);
      User.findOneAndUpdate(
        { _id: req.params.userId },
        { $addToSet: { assignments: req.body } },
        { runValidators: true, new: true }
      )
        .then((user) =>
          !user
            ? res
                .status(404)
                .json({ message: 'No user found with that ID :(' })
            : res.json(user)
        )
        .catch((err) => res.status(500).json(err));
    },
  
  };